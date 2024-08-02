const  open = document.querySelector(".ghosh button");
const  priya = document.querySelector(".priya");
const vBack = document.querySelector("#back")
const next = document.querySelector("#next");
const nextPage = document.querySelector(".video");
const next2 = document.querySelector("#next2");
const text = document.querySelector(".text");
const textB = document.querySelector(".text button");
const love = document.querySelector(".Love");
const back2 = document.querySelector("#back2");


open.onclick = ()=>{
    priya.classList.add("activeInfo");
}
next.onclick = ()=>{
    nextPage.classList.add("open");
}
vBack.onclick = ()=>{
    nextPage.classList.remove("open");
}
next2.onclick = ()=>{
    text.classList.add("text2");
}
textB.onclick = ()=>{
    love.classList.add("love2")
}
back2.onclick = ()=>{
    text.classList.remove("text2")
}