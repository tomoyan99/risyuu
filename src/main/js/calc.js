"use strict";
/* 単位数変化の監視と合計 */



/* 前期合計 */
{
	// const sum_bf = document.querySelector("td#sum_bf");

	const td_credit_All = document.querySelectorAll("div#semester_bf tr.credit td"); //単位合計要素

	//moの設定
	const config = {
		childList : true, //文字要素の変更
		characterDataOldValue: true, //変更前のテキスト要素を保持
	}
	let sum_cre = 0; //総和の初期化
	//監視処理のインスタンス化
	const mo = new MutationObserver((record) => {
		record.forEach((td)=>{
			if (td.removedNodes[0] !== undefined) {
				
				//---カレンダー下部の期別合計をいじる部分---//
				sum_cre -= parseInt(td.removedNodes[0].data); //前に選択されていた分を引く
				sum_cre += parseInt(td.addedNodes[0].data); //今選択された分を足す
				sum_bf.innerHTML = sum_cre; //innerHTMLを変更
				
				//---領域科目別の点数---//
				if (td.target.attr !== undefined && td.target.reattr !== undefined) {
					//ryouiki_sumは得点計算用の配列
					//ryouikiにそのまま数値を足して表示する方法がこれ以外分からなかった。
					ryouiki_sum[td.target.reattr.division] -= parseInt(td.target.reattr.credit); //前に選択されていた分を引く
					ryouiki_sum[td.target.attr.division] += parseInt(td.target.attr.credit); //今選択された分を足す
					ryouiki[td.target.reattr.division].innerHTML = parseInt(ryouiki_sum[td.target.reattr.division]); //反映
					ryouiki[td.target.attr.division].innerHTML = parseInt(ryouiki_sum[td.target.attr.division]); //反映
				}
					
			}// if (td.removedNodes[0] != undefined)
		}); //forEach
	});//mo
	
	//すべてのtdを監視して処理
	td_credit_All.forEach((td) => {
		mo.observe(td, config);
	});

}
/* 後期合計 */
{
	// const sum_af = document.querySelector("td#sum_af");

	const td_credit_All = document.querySelectorAll("div#semester_af tr.credit td"); //単位合計要素

	//moの設定
	const config = {
		childList: true, //文字要素の変更
		characterDataOldValue: true, //変更前のテキスト要素を保持
	}
	let sum_cre = 0; //総和の初期化
	//監視処理のインスタンス化
	const mo = new MutationObserver((record) => {
		record.forEach((td) => {
			if (td.removedNodes[0] !== undefined) {

				//---カレンダー下部の期別合計をいじる部分---//
				sum_cre -= parseInt(td.removedNodes[0].data); //前に選択されていた分を引く
				sum_cre += parseInt(td.addedNodes[0].data); //今選択された分を足す
				sum_af.innerHTML = sum_cre; //innerHTMLを変更

				//---領域科目別の点数---//
				if (td.target.attr !== undefined && td.target.reattr !== undefined) {
					//ryouiki_sumは得点計算用の配列
					//ryouikiにそのまま数値を足して表示する方法がこれ以外分からなかった。
					ryouiki_sum[td.target.reattr.division] -= parseInt(td.target.reattr.credit); //前に選択されていた分を引く
					ryouiki_sum[td.target.attr.division] += parseInt(td.target.attr.credit); //今選択された分を足す
					ryouiki[td.target.reattr.division].innerHTML = parseInt(ryouiki_sum[td.target.reattr.division]); //反映
					ryouiki[td.target.attr.division].innerHTML = parseInt(ryouiki_sum[td.target.attr.division]); //反映
				}
			}// if (td.removedNodes[0] != undefined)
		}); //forEach
	});//mo

	//すべてのtdを監視して処理
	td_credit_All.forEach((td) => {
		mo.observe(td, config);
	});

}

/* 通年合計 */
{
	//moの設定
	const config = {
		childList: true, //文字要素の変更
	}

	//監視処理のインスタンス化
	const mo = new MutationObserver((record,obserber) => {
		sumAllspan.innerHTML = parseInt(td_sum_sem[0].innerHTML) + parseInt(td_sum_sem[1].innerHTML); //通年合計に"/49"をつけて変更
	});

	//前期合計,後期合計の変更を監視
	td_sum_sem.forEach((td) => {
		mo.observe(td, config);
	});
}

/* 単位数の過不足を色で判定 */
{
	const styleDiv = sumAlldiv.style;

	// moの設定
	const config = {
		childList: true,
	}


	//通年科目数の数に応じてdivを色分け
	const mo = new MutationObserver(() => {
		const credit_all = parseInt(sumAllspan.innerHTML); //通年単位合計(数値)
	
		if (credit_all === 0) {
				styleDiv.backgroundColor = "#fff";
				styleDiv.color = "#000";
				tooltipP.innerHTML = "履修科目がゼロです😡";
			}else if (credit_all < 49) { //49単位未満
			styleDiv.backgroundColor = "#bdc61b";
				styleDiv.color = "#000";
				tooltipP.innerHTML = "履修科目が少ないです😳";
				displayTooltip(); //マウスオーバーでツールチップを出す関数
			} else if (credit_all === 49) { //49単位
				styleDiv.backgroundColor = "rgba(0,200,50,0.6)";
				styleDiv.color = "#fff";
				tooltipP.innerHTML = "ぴったり！！！😍";
				displayTooltip(); //マウスオーバーでツールチップを出す関数
			} else if (credit_all > 49) { //49単位超過
				styleDiv.backgroundColor = "rgb(218, 118, 255)";
				styleDiv.color = "#fff";
				tooltipP.innerHTML = "履修科目が多すぎます😭";
				displayTooltip(); //マウスオーバーでツールチップを出す関数
		}
	});
	
	mo.observe(sumAllspan, config);//監視の開始
}

