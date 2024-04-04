// カレンダー・メニューサイズ調整のリスナーを登録
window.addEventListener("DOMContentLoaded",()=>{
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
});
//カレンダーの高さを取得する
function getVisibleTableSize() {
    for (const table of document.querySelectorAll("div.calendar table")) {
        if (table.clientHeight !== 0) {
            return table.clientHeight;
        }
    }
}
//カレンダーのtdのフォントサイズを調整し、高さを調整する
function setTdSize() {
    const root = document.querySelector(":root");
    const cal_h = document.querySelector("div.calendar").clientHeight;
    root.style.setProperty("--td-font-size", "0px");
    for (let i = 0;;i+=0.1) {
        const table_h = getVisibleTableSize();
        if (table_h >= cal_h - 2) {
            break;
        }
        root.style.setProperty("--td-font-size", i + "px");
    }
}

// メニューボタンの大きさを調整する
function setMenuSize() {
    const head_h = document.querySelector("div.header").clientHeight;
    const root = document.querySelector(":root");
    let menu_size = 0;
    for (let i = 0; ; i = i + 0.5) {
        if (i >= head_h-3) {
            root.style.setProperty("--menu-size", i + "px");
            root.style.setProperty("--menu-font-size", i*0.8 + "px");
            break;
        }
    }
}