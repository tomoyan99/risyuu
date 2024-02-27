"use strict";

/* 学年セレクトボックスを変えたときの処理 */
/* data_bf/data_afの更新と、optionの削除・作成を行う */

grade.addEventListener("change",()=>{
	data_sem = {
		bf: getData(grade.value, "bf"), //前期科目データを設定（gradeをいじったときに変更されるようlet）
		af: getData(grade.value, "af")  //後期科目データを設定（gradeをいじったときに変更されるようlet）
	}; 
	["bf","af"].forEach((semester)=>{
		deleteCalender(sel_sem[semester]);
		createCalendar(data_sem[semester], sel_sem[semester]);
	});
});