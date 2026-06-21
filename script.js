function showTab(id, btn){

    let tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(t => t.classList.remove("active"));

    document.getElementById(id).classList.add("active");

    let buttons = document.querySelectorAll(".tab");
    buttons.forEach(b => b.classList.remove("active"));

    btn.classList.add("active");
}
