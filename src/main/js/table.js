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

window.addEventListener("DOMContentLoaded",()=>{

	const menu = document.querySelectorAll("input.menu");//ナビ部ボタン
	const main = document.querySelector("div.main");
	const before = document.querySelector("input[name=before]");	//前期ボタン
	const after = document.querySelector("input[name=after]");	//後期ボタン
	const div_bef = document.querySelector("div#semester_bf");	//前期div
	const div_aft = document.querySelector("div#semester_af");	//後期div
	const div_term = {before:div_bef,after:div_aft}; //タームdiv
	const screenshot = document.querySelector("input#screenshot");
	const nav = document.querySelector("div.navigates");
	
	before.style.backgroundColor = "#f23600"; //デフォルトは前期ボタン背景色を赤
	before.style.color = "#fff"; //デフォルトは前期ボタン文字色を白

	//(デバッグ用)クリックした要素の縦横取得
	// document.addEventListener("click",(e)=>{
	// 	console.log("width:"+e.target.clientWidth);
	// 	console.log("height:"+e.target.clientHeight);
	// });
	
	//tdサイズ調整
	setTdSize();

	//menuサイズ調整
	setMenuSize();
	
	//リサイズ時のtdとmenuの大きさ調整
	window.addEventListener("resize",()=>{
		setTdSize();
		setMenuSize();
	});
	//フルスクリーン時のtdとmenuの大きさ調整
	document.addEventListener("fullscreenchange",()=>{
		setTdSize();
		setMenuSize();
	});

	//ナビ部トグル
	//開く
	menu[0].addEventListener("click",(e)=>{
			menu[0].style.display = "none";
			menu[1].style.display = "block";
			nav.style.display = "block";
			// root.style.setProperty("--display-none", "grid");
			nav.classList.add("showTable");
			nav.classList.remove("closeTable");
	});
	//閉じる
	menu[1].addEventListener("click",()=>{
		nav.classList.remove("showTable");
		nav.classList.add("closeTable");
		setTimeout(() => {
			menu[0].style.display = "block";
			menu[1].style.display = "none";
			// root.style.setProperty("--display-none", "none");
			nav.style.display = "none";
			}, 200);
	});
	// 前期後期ボタンを押したときの挙動
	[before,after].forEach((elm)=>{
		elm.addEventListener("click",(event)=>{
			
			// 今選択してるタームではない方を返す関数
			function getElseTerm(nowterm) {
				if (nowterm === before) {
					return after;
				} else if (nowterm === after) {
					return before;
				}
			}
			
			const nowTerm = elm; //選択ターム
			const elseTerm = getElseTerm(elm); //非選択ターム

			// ボタンクリックされたとき
				nowTerm.style.backgroundColor = "#f23600"; 		//押したボタンの背景色を赤に
				elseTerm.style.backgroundColor = "#fff"; 		//押してない方の背景色を白に
				elseTerm.style.color = "#000"; 					//後期ボタンの文字を黒に
				div_term[nowTerm.name].classList.add("showTable");	//選択タームのカレンダーをアニメーション追加
				div_term[elseTerm.name].classList.remove("showTable");	//非選択タームのカレンダーをアニメーション削除
				div_term[nowTerm.name].style.display = "block";	//非選択カレンダーを非表示
				div_term[elseTerm.name].style.display = "none";	//非選択カレンダーを非表示
				
		});//elm.addEventListener("click"
	});//forEach
	//スクショ撮る
	screenshot.addEventListener("click",()=>{;
		createScreenShot();
	});


	/* default_optionの初期化（attrの設定） */
	setDefaultAttr();

	/* optionを作る */
	createCalendar(data_sem["bf"],sel_sem["bf"]);
	createCalendar(data_sem["af"],sel_sem["af"]);

	/* 領域科目単位数の初期化 */
	for (const key in ryouiki) {
		ryouiki[key].innerHTML = parseInt(0);
	}
});//window.onload

// カレンダーの作成
function createCalendar(data, sel) {
	if (data.length !== 0) {
		//---mon～satの6回---//
		for (const key in sel) {
			//---st1～st5の5回---//
			sel[key].forEach((cell1, index1) => {
				//sel[key]は曜日列の各行。index1は[0]～[4]
				let optArray = data.filter((data) => {
					if (day_conv_day[data.day] === key && parseInt(data.time) === index1 + 1){ return data; }
				});//optArray_
				//作成
				optArray.forEach((data, index2) => {
					createOption(cell1, data, index2 + 1);
				});//foreach
			});
		}
	}
}

//optionをつくる関数
function createOption(work_place,data,index) {
	const opt = document.createElement("option");
	opt.id = "opt"+"_"+day_conv_day[data.day]+"_"+data.time+"_"+index;//idの設定
	opt.className = "opt"; //classの設定

	opt.attr = {
		name : data.name, //name
		day : day_conv_day[data.day], //day
		time : parseInt(data.time), //time
		credit : parseInt(data.credit), //credit
		compulsory : parseInt(data.compulsory), //compulsory(必修)
		course : parseInt(data.course), //course
		division : data.division, // division(科目領域)
		multi : parseInt(data.multi), // 複講
	};
	opt.innerHTML = data.name; //本文
	if (parseInt(data.course) !== 0) {
		opt.style.backgroundColor = course_color[data.course];
		opt.style.color = "rgba(0,0,0,1)";
	}
	if (parseInt(data.compulsory) === 1) {
		opt.style.backgroundColor = "rgba(220,30,60,0.9)";
		opt.style.color = "#fff";
	}

	work_place.appendChild(opt); //子要素としてselectの下につくる
}

//optionを削除
function deleteCalender(sel) {
	for (const key in sel) {
		//---st1～st5の5回---//
		sel[key].forEach((cell1, index1) => {
			//sel[key]は曜日列の各行。index1は[0]～[4]
			cell1.style.backgroundColor = "";
			Object.values(cell1).forEach((opt,index2)=>{
				//空白じゃなかったら削除
				if (opt.value !== "default" && opt.tagName !== undefined) {
				sel[key][index1].removeChild(opt);
				}
			});
			
		});
	}
	const styleDiv = sumAlldiv.style;
	styleDiv.backgroundColor = "";
	const td_credit_all = document.querySelectorAll("tr.credit td,.ryouiki");
	td_credit_all.forEach((td)=>{
		delete td.attr;
		delete td.reattr;
		td.style.color = "";
		td.innerHTML = 0;
	});
}

//defaultの初期設定
function setDefaultAttr() {
	const def = document.querySelectorAll("option[value=default]");
	def.forEach((e)=>{
		e.attr ={
			name:"default", //name
			day: e.closest("select").name, //day
			time: e.closest("tr").childNodes[1].innerHTML, //time
			credit: 0, //credit
			compulsory: 0, //compulsory(必修)
			course: 0, //course
			division: "ip", // division(科目領域)
			multi: 0, // 複講
		}
	});
}
// スクショ作成
function createScreenShot() {
	const div_union = document.createElement("div");
	const div_points = document.createElement("div");
	const div_calendar = document.querySelector("div.calendar").cloneNode(true);
	const div_points_area = document.querySelector("div.area_sub").cloneNode(true);
	const div_points_all = document.querySelector("div.sum_all").cloneNode(true);
	let count = 0;
	const select_origin = document.querySelectorAll("select");
	const select_clone = div_calendar.querySelectorAll("select");
	for (const selval of select_origin) {
		select_clone[count].value = selval.value;
		count++;
	}
	div_union.style.display = "flex";
	div_calendar.style.display = "grid";
	div_points.style.display = "grid";
	div_calendar.querySelector("div#semester_bf").style.display = "block";
	div_calendar.querySelector("div#semester_bf").style.opacity = 1;
	div_calendar.querySelector("div#semester_bf").classList.remove("showTable");
	div_calendar.querySelector("div#semester_af").style.display = "block";
	div_calendar.querySelector("div#semester_af").style.opacity = 1;
	div_calendar.querySelector("div#semester_af").classList.remove("showTable");
	div_points_area.querySelector("table").style.cssText = "border:1.5px solid #000,border-collapse:collapse";
	div_points_area.querySelectorAll("th").forEach(element => {
		element.style.border = "1.5px solid #000";
		element.style.color = "#000";
	});
	div_points_area.querySelectorAll("td").forEach(element => {
		element.style.border = "1.5px solid #000";
		element.style.color = "#000";
	});
	div_points_all.querySelector("label").style.color="#000";
	div_points_all.querySelector("#sum_all_div").style.border="1.5px solid #000";
	
	div_points.appendChild(div_points_area);
	div_points.appendChild(div_points_all);
	div_union.appendChild(div_calendar);
	div_union.appendChild(div_points);
	div_union.classList.add("union");
	document.body.appendChild(div_union);
	html2canvas(document.querySelector("div.union"),{scale:3}).then((canvas)=>{
		document.body.removeChild(document.querySelector("div.union"));
			const today = new Date();
			const filename = String(today.valueOf() + ".jpg");
			canvas.toBlob(blob => {
				const a = document.createElement("a");
				a.href = URL.createObjectURL(blob);
				a.download = filename;
				a.click();
				URL.revokeObjectURL(a.href);
			}, "image/jpeg", 1);
		});
}

//カレンダーのtd設定
function setTdSize() {
	const root = document.querySelector(":root"); 
	const cal_h = document.querySelector("div.calendar").clientHeight;
	root.style.setProperty("--td-font-size", "0px");
	for (let i = 0;;i+=0.1) {
		const table_h = getVisibleTableSize();
		if (table_h >= cal_h - 2) {
			break;
		}
		// console.log("cal_h:%d\ntable_h:%d\nsize:%d",cal_h,table_h,i);
		root.style.setProperty("--td-font-size", i + "px");
	
	}
}

// メニューボタンの大きさ調整
function setMenuSize() {
	const head_h = document.querySelector("div.header").clientHeight;
	const root = document.querySelector(":root");
	let menu_size = 0;
	for (let i = 0; ; i = i + 0.5) {
		// console.log("head_h:%d\nmenu_size:%d",head_h,menu_size);
		if (i >= head_h-3) {
			root.style.setProperty("--menu-size", i + "px");
			root.style.setProperty("--menu-font-size", i*0.8 + "px");
			break;
		}
	}
}

function getVisibleTableSize() {
	for (const table of document.querySelectorAll("div.calendar table")) {
		if (table.clientHeight !== 0) {
			return table.clientHeight;
		}
	};
}