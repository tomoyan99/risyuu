"use strict";

/* 
プルダウンのoptionを変更したときの挙動を扱うプログラム 
[機能]
・optionの変更を検知して、
	・選択されているoptionノード取得
	・変更されたoptionの下のtdノードを取得し単位数を書き込み
	・複講(multi==1)を検知して同じ日、同じ名前、違う時限でmultiが1のoptionを自動選択
	・複講から単講に変更した際、変更前と同じ日、同じ名前、違う時限でmultiが1のoptionを選択から外す（value==defaultをtrueに）
	・今何を選択しているかをselectやtdのattrに、前に何を選択していたかをtdのreattrに格納
*/
{
	window.addEventListener("DOMContentLoaded",()=>{
		const selects = document.querySelectorAll("div.calendar select");
		selects.forEach((select)=>{
			select.addEventListener("change",selectChange);
		});
	});
}

function changeCredit(target,credit_cur) {
	// 変更したselectのattr,preattr
	const target_attr = target.attr;
	const target_preattr = target.preattr;
	// selectのIDからパースした座標パラメータ
	const target_location = parseID(target.id);
	// selectの座標パラメータをcredit_tdのパラメータに書き換え
	const credit_td_location = Object.assign({},target_location);
	credit_td_location.selector = "c";
	// credit_tdのパラメータを下にcredit_tdのIDを作成
	const credit_td_id = createID(credit_td_location.term,credit_td_location.selector,credit_td_location.day,credit_td_location.time,credit_td_location.index);
	// IDからcredit_tdを検索
	const credit_td = document.querySelector(`#${credit_td_id}`);
	// いま選択したtargetのdivisionと、これまで選択していたdivisionの要素を取得
	const division_target = document.querySelector(`#${target_attr.division} span`);
	const division_pretarget = document.querySelector(`#${target_preattr.division} span`);
	// 今まで選択してた科目の単位
	const credit_pre = parseInt(credit_td.innerText);
	// select下のcredit_tdに選択した科目の単位数を記述
	credit_td.innerText = `${credit_cur}`;

	// 選択したのが必修ならtdの文字色を赤に
	if (target_attr.isCompulsory){
		credit_td.style.color = "#f00"
	}else{
		credit_td.style.color = "#000"
	}

	// 今選択した科目のdivisionに単位を加算
	division_target.innerText = `${parseInt(division_target.innerText)+credit_cur}`;
	// これまで選択していた科目のdivisionからは単位を減算
	division_pretarget.innerText = `${parseInt(division_pretarget.innerText)-credit_pre}`;

	// selectが変更されたタームのカレンダーの全credit_td
	const credit_in_term = document.querySelectorAll(`div#${target_location.term} tr.credit td`);
	// タームごとの単位合計のtd
	const credit_sum_term = document.querySelector(`#${target_location.term}_creditSum`);
	// タームごとの合計を計算
	credit_sum_term.innerText = `${[...credit_in_term].reduce((p,c)=>p+parseInt(c.innerText),0)}`;
	const sum_all = document.querySelector("#sum_all_span");
	const sum_sem = document.querySelectorAll("td.sum_sem");
	sum_all.innerText = `${[...sum_sem].reduce((p,c)=>p+parseInt(c.innerText),0)}`;
}
function generateDataObject(main_select,ms_attr) {
	const ms_location = parseID(main_select.id);
	const sub_select_times = ms_attr.time.filter((t)=>t !== ms_location.time);
	const sub_select_IDs = sub_select_times.map((sst)=>createID(ms_location.term,ms_location.selector,ms_location.day,sst));

	const selectIDs = [main_select.id,...sub_select_IDs];
	const select_nodes = selectIDs.map((id)=>document.querySelector(`#${id}`));

	const creditIDs = selectIDs.map((id)=>{
		const location = parseID(id);
		location.selector = "c";
		return createID(location.term,location.selector,location.day,location.time);
	});
	const credit_nodes = creditIDs.map((id)=>document.querySelector(`#${id}`));

	const optionIDs = select_nodes.map((s)=>{
		const options = [...s.options];
		const option_index = options.findIndex((d)=>{
			const isSameName = d.attr.name === ms_attr.name;
			const isSameTeachers = d.attr.teacher.every((t,i)=>t === ms_attr.teacher[i]);
			return isSameName&&isSameTeachers;
		});
		const s_loc = parseID(s.id);
		return createID(s_loc.term,"o",s_loc.day,s_loc.time,option_index);
	})
	const option_nodes = optionIDs.map((id)=>document.querySelector(`#${id}`));
	const option_indexes = option_nodes.map((option)=>option.index);
	const credit_nums = option_nodes.map((o,i)=>{
		return (i===0)?o.attr.credit:0;
	}).sort((a,b)=>(a>b)?-1:1);
	return {
		selectIDs	:selectIDs,
		optionIDs	:optionIDs,
		creditIDs	:creditIDs,
		select_nodes:select_nodes,
		option_nodes:option_nodes,
		credit_nodes:credit_nodes,
		option_indexes:option_indexes,
		credit_nums :credit_nums,
	};

}
function updateSelectAttr(select) {
	const select_target = select;
	const selected_option = select_target.selectedOptions[0];
	select_target.preattr = structuredClone(select_target.attr);
	select_target.attr = structuredClone(selected_option.attr);
}
function selectChange(event) {
	const main_select = event.target;
	const ms_index = main_select.selectedIndex;
	const ms_option = main_select.selectedOptions[0];
	const isSameName = main_select.attr.name === ms_option.attr.name;
	const isSameTeacher = main_select.attr.name === ms_option.attr.name;
	if (ms_option.attr.time.length === 1){
		const ms_attr = main_select.attr;
		const preData = generateDataObject(main_select,ms_attr);
		preData.select_nodes.forEach((select,i)=>{
			select.selectedIndex = 0;
			select.className = "";
			updateSelectAttr(select);
			changeCredit(select,preData.credit_nums[i]);
		});
	}
	const ms_attr = ms_option.attr;
	const curData = generateDataObject(main_select,ms_attr);
	curData.select_nodes.forEach((select,i)=>{
		select.selectedIndex = curData.option_indexes[i];
		select.className = ms_option.classList;
		updateSelectAttr(select);
		changeCredit(select,curData.credit_nums[i]);
	});
	const sum_all_div = document.querySelector("#sum_all_div");
	sum_all_div.dispatchEvent(new Event("creditWarning"));
}
