"use strict";


/* 
テーブル（カレンダー）を作るプログラム
主に初期状態を設定してる 
[機能]
・後期カレンダーを非表示に
・前期後期ボタンの挙動と色の変更
・初期optionの作成
・スクロール禁止の設定
*/
//月～金表記をmon～fri表記に変える配列

{
	window.addEventListener("DOMContentLoaded",()=>{
		const btn_bf = document.querySelector("input[name=before]");//前期ボタン
		const btn_af = document.querySelector("input[name=after]");	//後期ボタン
		const div_bf = document.querySelector("div#前期");	//前期div
		const div_af = document.querySelector("div#後期");	//後期div
		const div_term = {before:div_bf,after:div_af}; 	//タームdiv
		const data = getData2(1);

		btn_bf.style.backgroundColor = "#f23600"; //デフォルトは前期ボタン背景色を赤
		btn_bf.style.color = "#fff"; //デフォルトは前期ボタン文字色を白

		//(デバッグ用)クリックした要素の縦横取得
		// document.addEventListener("click",(e)=>{
		// 	console.log("width:"+e.target.clientWidth);
		// 	console.log("height:"+e.target.clientHeight);
		// });

		// 前期後期ボタンを押したときの挙動
		function clickTermBtn(event) {
			// 今選択してるタームではない方を返す関数
			function getElseTerm(nowTerm) {
				return (nowTerm.name==="before")?btn_af:btn_bf;
			}
			const nowTerm = event.target; //選択ターム
			const elseTerm = getElseTerm(nowTerm); //非選択ターム

			// ボタンクリックされたとき
			nowTerm.style.backgroundColor = "#f23600"; 			//押したボタンの背景色を赤に
			elseTerm.style.backgroundColor = "#fff"; 			//押してない方の背景色を白に
			elseTerm.style.color = "#000"; 						//後期ボタンの文字を黒に
			div_term[nowTerm.name].classList.add("showTable");	//選択タームのカレンダーをアニメーション追加
			div_term[elseTerm.name].classList.remove("showTable");//非選択タームのカレンダーをアニメーション削除
			div_term[nowTerm.name].style.display = "block";		//非選択カレンダーを非表示
			div_term[elseTerm.name].style.display = "none";		//非選択カレンダーを非表示
		}
		/* タームボタンにイベント追加 */
		btn_bf.addEventListener("click",clickTermBtn);
		btn_af.addEventListener("click",clickTermBtn);

		/* default_optionの初期化（attrの設定） */
		setDefaultAttr();

		/* optionを作る */
		createCalendar(data);

		//領域科目
		const ryouiki = {
			"工学基礎": document.querySelector("td#工学基礎 span"),
			"基礎専門": document.querySelector("td#基礎専門 span"),
			"マネ地域": document.querySelector("td#マネ地域 span"),
			"専門": document.querySelector("td#専門 span"),
			"語学": document.querySelector("td#語学 span"),
			"関連専門": document.querySelector("td#関連専門 span"),
			"一般": document.querySelector("td#一般 span"),
		}
		/* 領域科目単位数の初期化 */
		for (const key in ryouiki) {
			ryouiki[key].innerHTML = "0";
		}

	});
}
// カレンダーの作成
function createCalendar(data) {
	if (data.length > 0) {
		data.forEach((d)=>{
			createOption(d);
		});
	}
}

//optionをつくる関数
function createOption(data) {
	//　データを読み込み、ターム、時限によって振り分け
	data.term.forEach((term)=>{
		data.time.forEach((time)=>{
			if (time === "集中講義"){
				return;
			}
			//　ターム・時限によってデータに対応したIDを生成し、select要素を取得
			const select_ID = createID(term,data.day,time,"s",0);
			const select = document.querySelector(`select#${select_ID}`);

			// selectにくっついてるoptionの数によってindexを生成
			const option_index = select.length;
			// select同様にIDを生成し、生成したoption要素に紐づけ
			const option_ID = createID(term,data.day,time,"o",option_index);
			const option = document.createElement("option");
			option.id = option_ID;//idの設定

			// 各optionにデータをattr属性として保存
			option.attr = {
				name 	: data.name, 			　//授業名
				teacher : data.teacher,			　//教師名
				day 	: day_conv_day[data.day],//曜日
				time 	: data.time, 			　//時限
				credit 	: data.credit, 			　//単位
				grade 	: data.compulsory, 		　//学年
				isCompulsory : data.compulsory, 　//必修
				division: data.division, 		　//科目領域
				course 	: data.course, 			　//コース
				multi 	: (data.time>1)?1:0 	　//複講
			};
			// 教授名の処理。複数人いる場合は最初の人のみ表示し、あとは"..."にする
			const teacherListTxt = (arr)=>{
				let txt = arr[0].toString();
				if (arr.length > 1){
					txt += "...";
				}
				return `[${txt}]`;
			}
			// optionに表示される名称
			option.innerText = `${data.name}${teacherListTxt(data.teacher)}`;
			if (data.compulsory){
				// 必修だったら
				// 必修色をクラスを追加することで設定
				option.classList.add("compulsory");
			}else{
				// 必修じゃないなら
				// コース色をクラスを追加することで設定
				option.classList.add(...data.course.map((c)=>`course_${c}`));
			}
			select.appendChild(option); //子要素としてselectの下につくる
		});
	});
}
const day_conv_day = { "月": "mon", "火": "tue", "水": "wed", "木": "thr", "金": "fri", "土": "sat" };

// term,dayなどからIDを生成
function createID(term,day,time,selector,index=0) {
	return `${term}_${day_conv_day[day]}_${selector}_${time}_${index}`;
}
// IDからterm,dayなどをパース
function parseID(ID) {
	const params = ID.split("_");
	return {element:params[0],day:params[1],selector:params[2],time:params[3],index:params[4]};
}


//optionを削除
function deleteCalender() {
	const select = document.querySelectorAll("div.calendar select");
	select.forEach((element)=>{
		element.innerHTML = `<option value="default" style="text-align:center;">― ― ― ― ― ―</option>`;
		if (element.attr){
			delete element.attr;
		}
		if (element.reattr){
			delete element.reattr;
		}
		element.selectedIndex = 0;
	});

	//年間単位数合計のスタイル
	const styleDiv = document.querySelector("div#sum_all_div").style;
	styleDiv.backgroundColor = "";
	const td_credit_all = document.querySelectorAll("tr.credit td,.ryouiki");
	td_credit_all.forEach((td)=>{
		delete td.attr;
		delete td.reattr;
		td.style.color = "";
		td.innerText = "0";
	});
}

//defaultの初期設定
function setDefaultAttr() {
	const def = document.querySelectorAll("option[value=default]");
	def.forEach((e)=>{
		e.attr ={
			name		:"default", //name
			teacher		:[],
			day			: e.closest("select").name, //day
			time		: e.closest("tr").childNodes[1].innerText, //time
			credit		: 0, //credit
			isCompulsory: false, //compulsory(必修)
			course		: ["なし"], //course
			division	: "一般", // division(科目領域)
			multi		: 0, // 複講
		}
	});
}