let profBtn = document.querySelector("#profile");
let profSideBar = document.querySelector("#prof-sidebar");

profBtn.addEventListener('click', () => {
    profSideBar.classList.toggle('visible');
})

let show = document.querySelector("#show");
let labRoom = document.querySelector(".room");

show.addEventListener('click', () => {
    labRoom.classList.toggle('visibleroom');
})