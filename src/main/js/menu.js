window.addEventListener("DOMContentLoaded",()=>{
    const menu = document.querySelectorAll("input.menu");//ナビ部ボタン
    const screenshot = document.querySelector("input#screenshot");
    const nav = document.querySelector("div.navigates");

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
    //スクショ撮る
    screenshot.addEventListener("click",()=>{;
        createScreenShot();
    });

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

});
