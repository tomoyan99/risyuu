"use strict";

/* グローバル変数の寄せ集め */
const grade = document.querySelector("#grade_text"); // 学年ボックス
let data_sem = {
	bf: getData(grade.value, "bf"), //前期科目データを設定（gradeをいじったときに変更されるようlet）
	af: getData(grade.value, "af")  //後期科目データを設定（gradeをいじったときに変更されるようlet）
}; 

//月～金表記を0～5表記に変える配列
const day_conv_num = { "月": 0, "火": 1, "水": 2, "木": 3, "金": 4, "土": 5 };
//月～金表記をmon～fri表記に変える配列
const day_conv_day = { "月": "mon", "火": "tue", "水": "wed", "木": "thr", "金": "fri", "土": "sat" };

//学期で分かれた特定の曜日の全時限のselect要素ノード
const sel_sem = {
	bf: {
		mon: document.querySelectorAll("div#semester_bf select[name=mon]"),
		tue: document.querySelectorAll("div#semester_bf select[name=tue]"),
		wed: document.querySelectorAll("div#semester_bf select[name=wed]"),
		thr: document.querySelectorAll("div#semester_bf select[name=thr]"),
		fri: document.querySelectorAll("div#semester_bf select[name=fri]"),
		sat: document.querySelectorAll("div#semester_bf select[name=sat]"),
		},
	af:{
		mon: document.querySelectorAll("div#semester_af select[name=mon]"),
		tue: document.querySelectorAll("div#semester_af select[name=tue]"),
		wed: document.querySelectorAll("div#semester_af select[name=wed]"),
		thr: document.querySelectorAll("div#semester_af select[name=thr]"),
		fri: document.querySelectorAll("div#semester_af select[name=fri]"),
		sat: document.querySelectorAll("div#semester_af select[name=sat]"),
	}
};

//学期別の各曜日における全時限分のtd要素ノード
const td_credit_sem = {
	bf: {
		mon: document.querySelectorAll("div#semester_bf td[name=mon]"),
		tue: document.querySelectorAll("div#semester_bf td[name=tue]"),
		wed: document.querySelectorAll("div#semester_bf td[name=wed]"),
		thr: document.querySelectorAll("div#semester_bf td[name=thr]"),
		fri: document.querySelectorAll("div#semester_bf td[name=fri]"),
		sat: document.querySelectorAll("div#semester_bf td[name=sat]"),
		},
	af :{
		mon: document.querySelectorAll("div#semester_af td[name=mon]"),
		tue: document.querySelectorAll("div#semester_af td[name=tue]"),
		wed: document.querySelectorAll("div#semester_af td[name=wed]"),
		thr: document.querySelectorAll("div#semester_af td[name=thr]"),
		fri: document.querySelectorAll("div#semester_af td[name=fri]"),
		sat: document.querySelectorAll("div#semester_af td[name=sat]"),
	}
};

//各期単位数合計のNodeList
const td_sum_sem = document.querySelectorAll("td.sum_sem");

const sum_bf = document.querySelector("td#sum_bf");//td_sum_sem[0]と同じ
const sum_af = document.querySelector("td#sum_af");//td_sum_sem[1]と同じ

//年間単位数合計のNode(div要素)
const sumAlldiv = document.querySelector("div#sum_all_div");
//年間単位数合計のNode(span要素)
const sumAllspan = document.querySelector("span#sum_all_span");

//tooltip
const tooltipDiv = document.querySelector("div.tooltip");
const tooltipP = document.querySelector("div.tooltip p");

// コース色　　,知能(1)=rgba(80,210,255,0.5),社会(2)=rgba(200,100,60,0.5)
const course_color = {
	"なし":"rgba(255, 248, 228, 0.9)",
	"知能":"rgba(80, 210, 255, 0.7)",
	"社会":"rgba(200,100,60,0.7)"
};

//必修カラー
const compulsory_color = ["#000","rgba(220,30,60,0.9)"];

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

//領域科目和
let ryouiki_sum = {
	kk: 0,
	ks: 0,
	tm: 0,
	se: 0,
	go: 0,
	ka: 0,
	ip: 0,
}