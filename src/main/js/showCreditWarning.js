window.addEventListener("DOMContentLoaded",()=>{
    const sum_all_div = document.querySelector("#sum_all_div");
    sum_all_div.addEventListener("creditWarning",creditWarning);
    sum_all_div.dispatchEvent(new Event("creditWarning"));
    // 単位数に応じて警告を出す処理
    function creditWarning(event) {
        const sum_all_div = event.target;
        const sum_all_span = document.querySelector("#sum_all_span");
        const credit_all = parseInt(sum_all_span.innerText);
        //tooltip
        const tooltipP = document.querySelector("div.tooltip p");

        if (credit_all === 0) {
            sum_all_div.style.backgroundColor = "#fff";
            sum_all_div.style.color = "#000";
            tooltipP.innerHTML = "履修科目がゼロです😡";
        }else if (credit_all < 49) { //49単位未満
            sum_all_div.style.backgroundColor = "#bdc61b";
            sum_all_div.style.color = "#000";
            tooltipP.innerHTML = "履修科目が少ないです😳";
            displayTooltip(sum_all_div); //マウスオーバーでツールチップを出す関数
        } else if (credit_all === 49) { //49単位
            sum_all_div.style.backgroundColor = "rgba(0,200,50,0.6)";
            sum_all_div.style.color = "#fff";
            tooltipP.innerHTML = "ぴったり！！！😍";
            displayTooltip(sum_all_div); //マウスオーバーでツールチップを出す関数
        } else if (credit_all > 49) { //49単位超過
            sum_all_div.style.backgroundColor = "rgb(218, 118, 255)";
            sum_all_div.style.color = "#fff";
            tooltipP.innerHTML = "履修科目が多すぎます😭";
            displayTooltip(sum_all_div); //マウスオーバーでツールチップを出す関数
        }
    }

    //マウスオーバーでツールチップを出す関数
    function displayTooltip(sum_all_div) {
        const tooltipDiv = document.querySelector("div.tooltip");
        sum_all_div.addEventListener("mouseover", () => {
            tooltipDiv.style.display = "block";
        });
        sum_all_div.addEventListener("mouseout", () => {
            tooltipDiv.style.display = "none";
        });
    }
});
