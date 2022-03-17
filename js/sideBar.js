const sideMenuToggler = document.querySelector("#sideMenuToggler")
const sideBar = document.querySelector("#sideBar")
let sideBarActive = false

// el.classList возвращает массив(string) из классов элемента [sideBar, active, ....]
// el.classList.toggle - если переданный в скобках класс есть, то он убирается, если нет, то добавляется

sideMenuToggler.onclick = ()=>{
    sideBarActive = !sideBarActive
    sideBar.classList.toggle("active")
}

