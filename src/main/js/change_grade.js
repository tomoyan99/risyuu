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
