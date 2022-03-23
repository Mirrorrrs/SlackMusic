const body = document.body
const timeTitle = document.querySelector("#timeTitle")
let currentDateHours = new Date().getHours()


const getRandomRange = (max) => {
    return Math.floor(Math.random() * max);
}
const getRandomColor = () => {
    return `rgba(${50 + getRandomRange(205)}, ${50 + getRandomRange(205)}, ${ 50 +getRandomRange(205)})`}
const useEffect = () => {
    body.style.background = `linear-gradient(0deg, rgba(0,0,0,1) 75%, ${getRandomColor()} 100%)`
    if (currentDateHours<10){
        timeTitle.innerHTML = "Доброе утро"
    }else if(currentDateHours<18){
        timeTitle.innerHTML = "Добрый день"
    }else if(currentDateHours<21){
        timeTitle.innerHTML = "Добрый вечер"
    }else{
        timeTitle.innerHTML = "Спокойной ночи"
    }
}
useEffect()