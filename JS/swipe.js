const point_1 = document.getElementById("point_1"),
    swipe_btn = document.querySelector("button.fa-angle-double-down"),
    header = document.querySelector("header"),
    swipe_btn_up = document.querySelector(".fa-angle-double-up");

swipe_btn.addEventListener("click", () => {
    header.style.transform = "translateY(-100%)";
    point_1.style.transform = "translateY(-100%)"; 
});

swipe_btn_up.addEventListener("click", () => {
    header.style.transform = "translateY(0%)";
    point_1.style.transform = "translateY(0%)"; 
})