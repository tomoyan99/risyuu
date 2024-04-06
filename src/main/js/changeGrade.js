"use strict";

/* 学年セレクトボックスを変えたときの処理 */
/* data_bf/data_afの更新と、optionの削除・作成を行う */
{
	const grade_changer = document.querySelector("#grade_text"); // 学年ボックス
	grade_changer.addEventListener("change",(e)=>{
		const grade = parseInt(e.target.value);
		const data = getData2(grade);
		deleteCalender();
		createCalendar(data);
	});
}
//optionを削除
function deleteCalender() {
	const select = document.querySelectorAll("div.calendar select");
	select.forEach((element)=>{
		// selectに適用されてるすべてのクラスを削除
		element.className = "";
		// 子要素（option要素）を全て削除
		while (element.firstChild) {
			element.removeChild(element.firstChild);
		}
	});
	// defaultのoptionを作成
	createDefaultOptions();
	//年間単位数合計のスタイル
	const sum_all_div = document.querySelector("div#sum_all_div");
	sum_all_div.style.backgroundColor = "";
	const td_credit_all = document.querySelectorAll("tr.credit td,.ryouiki,td.sum_sem,#sum_all_span");
	td_credit_all.forEach((td)=>{
		td.style.color = "";
		td.innerText = "0";
	});
}
