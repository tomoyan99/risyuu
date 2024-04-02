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

window.addEventListener("load", () => {
	/* selectを変えたときの処理 */

	["bf", "af"].forEach((key) => {
		selectSubject(sel_sem[key], key);
	});


});


//dataから選択されているoptionの名前と同じ名前かつ同じ曜日の奴を抽出
function findOption(data, tr_select, day) {
	const Index = tr_select.srcElement.selectedIndex; //今選択されているoptionが上から何番目かのindex
	const Name = tr_select.target[Index].innerText; //今選択されているoptionの名前
	let Array = data.filter((credit) => {
		//dataから選択されているoptionの名前と同じ名前かつ同じ曜日の奴を抽出
		if (credit.name == Name && day_conv_day[credit.day] == day) {
			return credit;
		}
	});
	return Array;
}

// セレクトされてるoption要素を返す
//入力はselectノード
function isselectedTrue(e_select) {
	let selected_option = Object.values(e_select).filter((option) => {
		if (option.selected === true) {
			return option;
		}
	});
	return selected_option;
}

//複講を検索
function findMulti(selected_option, data_sem) {
	const soa = selected_option.attr;
	//今選択したのとは別の時間のやつ
	const multi_sub = data_sem.filter((data) => {
		if (soa.name === data.name &&
			soa.day === day_conv_day[data.day] &&
			soa.time != data.time) {
			return data;
		}
	});
	return multi_sub;
}

//複講をセット
function setMulti(multi_sub, ab) {
	//multi_subは検索したマルチoption
	//multi_subの要素数だけ設定
	multi_sub.forEach((multi_attr) => {
		const want_to_change_sel = document.querySelector("#" + ab + "_" + day_conv_day[multi_attr.day] + multi_attr.time); //変えたいselect要素
		const want_to_change_td = document.querySelector("#" + ab + "_" + day_conv_day[multi_attr.day] + "_c" + multi_attr.time); //変えたいtd要素

		const want_to_change_opt = Object.values(want_to_change_sel).filter((opt) => {
			//attrが存在して、attr.nameがmulti_subのnameと同じoption要素を検索（変えたいselectから）
			if (opt.attr !== undefined && opt.attr.name === multi_attr.name) {
				return opt;
			}
		})[0]; //変えたいoption要素

		want_to_change_opt.selected = true; //optionを設定

		//reattrの設定
		if (want_to_change_sel.attr === undefined) {
			//初手複講を選択したとき
			want_to_change_td.reattr = want_to_change_sel[0].attr;//td.reattrはdefault.attrに初期化
		} else if (want_to_change_sel.attr !== undefined) {
			//二回目以降、何かから何かへ複講を選択した時
			want_to_change_td.reattr = want_to_change_sel.attr;//td.reattrは前に選択されていたoptionのattrに変更
		}

		want_to_change_sel.attr = JSON.parse(JSON.stringify(multi_attr)); //変えたいselectのattrに今選択されたoptionのattrをdeepコピー
		want_to_change_sel.attr.day = JSON.parse(JSON.stringify(day_conv_day[multi_attr.day])); //selectのattrにdayをコピー
		want_to_change_sel.style.backgroundColor = course_color[want_to_change_opt.attr.course]; //コースによって背景色を変更
		want_to_change_sel.style.color = compulsory_color[want_to_change_opt.attr.compulsory];//必修なら赤文字に
		want_to_change_td.innerHTML = multi_attr.credit; //tdに単位を設定
		want_to_change_td.attr = multi_attr; //tdに単位を設定
		want_to_change_td.style.color = "#ff4444"; //文字色を赤に

	});
}

//複講を解除
function removeMulti(multi_sub, ab) {
	//multi_subの要素数だけ設定
	multi_sub.forEach((element) => {
		const want_to_change_sel = document.querySelector("#" + ab + "_" + day_conv_day[element.day] + element.time); //変えたいselect要素
		const want_to_change_td = document.querySelector("#" + ab + "_" + day_conv_day[element.day] + "_c" + element.time); //変えたいtd要素

		want_to_change_td.reattr = want_to_change_sel.attr;//td.reattrは前に選択されていたoptionのattrに
		want_to_change_sel[0].selected = true; //optionはdefaultに設定

		want_to_change_td.attr = want_to_change_sel[0].attr; //td.attrはdefault.attrに（td.attrの初期化）
		want_to_change_sel.attr = want_to_change_sel[0].attr; //select.attrはdefault.attrに（td.attrの初期化）

		want_to_change_sel.style.backgroundColor = ""; //背景色をデフォルト（白）に設定
		want_to_change_sel.style.color = ""; //文字色をデフォルト（黒）に設定

		want_to_change_td.innerHTML = 0; //tdに単位数０を設定
		want_to_change_td.style.color = "#000"; //文字色を黒に
	});
}

function selectSubject(select_semester, semester) {
	for (const key in select_semester) {
		select_semester[key].forEach((select) => {
			//全てのselectについてEventListenerが反応するようにする処理
			select.addEventListener("change", (target) => {

				let td_credits = document.querySelectorAll("div#semester_" + semester + " tr.credit td[name=" + key + "]"); //前後期のセレクトされた曜日の全時限td_creditノード
				let selected_opt = isselectedTrue(target.target)[0]; //選択したoptionノードを取得
				const srcSelect = target.target; //select要素
				srcSelect.style.backgroundColor = "#fff"; //背景色をデフォルト（白）に変更
				/* 直下のtdに単位数を入力 */
				td_credits[selected_opt.attr.time - 1].style.color = "#000"; //tdの文字色をデフォルトの黒に
				srcSelect.style.backgroundColor = course_color[selected_opt.attr.course]; //コースによって背景色を変更
				srcSelect.style.color = compulsory_color[selected_opt.attr.compulsory]; //必修だったら文字色を赤に

				td_credits[selected_opt.attr.time - 1].innerHTML = JSON.parse(JSON.stringify(selected_opt.attr.credit)); //tdのinnerHTMLをselected_optのcreditに書き換え(mo反応)
				td_credits[selected_opt.attr.time - 1].style.color = "#ff4444"; //tdの文字色を赤に

				/* 複講を自動選択 */
				//srcSelect.attrが存在しない == 初回変更の場合
				if (srcSelect.attr === undefined) {

					td_credits[selected_opt.attr.time - 1].attr = JSON.parse(JSON.stringify(selected_opt.attr)); //td.attrにoptionのattrをコピー
					td_credits[selected_opt.attr.time - 1].reattr = JSON.parse(JSON.stringify(Object.values(srcSelect)[0].attr)); //td.reattrにdefaultのattrをコピー(reattrの初期化)

					if (selected_opt.attr.multi === 1) {
						//選択したoptionが複講だったとき
						const multi_sub = findMulti(selected_opt, data_sem[semester]); //選択されてない時限のノードを配列で複講
						setMulti(multi_sub, semester); //選択されてない複講をリセット
					}

				} else if (srcSelect.attr) {

					//二回目以降の選択
					td_credits[selected_opt.attr.time - 1].attr = JSON.parse(JSON.stringify(selected_opt.attr)); //td.attrにoptionのattrをコピー
					td_credits[selected_opt.attr.time - 1].reattr = JSON.parse(JSON.stringify(srcSelect.attr)); //td.reattrにselectのattrをコピー(reattrの初期化)

					if (srcSelect.attr.multi === 1) {
						//前に選択されていたのが複講だったとき
						//一回全部リセット
						const multi_sub = findMulti(srcSelect, data_sem[semester]); //選択されてない時限の複講を探してノードを配列で返却
						removeMulti(multi_sub, semester); //選択されてない複講をリセット

						if (selected_opt.attr.multi === 1) {
							//今選択されたのが複講の時
							const multi_sub = findMulti(selected_opt, data_sem[semester]); //選択されてない時限のノードを配列で複講
							setMulti(multi_sub, semester); //選択されてない複講をリセット
						} else if (selected_opt.attr.multi === 0) {
							//今選択されたのが単講の時
							if (selected_opt.attr.name === "default") {
								//defaultに戻したのなら
								td_credits[selected_opt.attr.time - 1].style.color = "#000"; //文字色を黒に
							}
						}
					} else if (srcSelect.attr.multi === 0) {
						//前に選択されていたのが単講

						if (selected_opt.attr.multi === 1) {
							//今選択されたのが複講の時
							const multi_sub = findMulti(selected_opt, data_sem[semester]); //選択されてない時限のノードを配列で複講
							setMulti(multi_sub, semester); //選択されてない複講をリセット
						} else if (selected_opt.attr.multi === 0) {
							//今選択されたのが単講の時
							if (selected_opt.attr.name === "default") {
								td_credits[selected_opt.attr.time - 1].style.color = "#000"; //文字色を黒に
							}
						}//if (selected_opt.attr.multi == 1)
					}//if (srcSelect.attr.multi == 1)
				}//if(srcSelect.attr == undefined )
				srcSelect.attr = JSON.parse(JSON.stringify(selected_opt.attr));//selectに今選択したoptionのattrをディープコピー
			});//eventListener
		});//foreach
	}//for in

}