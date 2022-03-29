import {getAlbums} from "./utils.mjs";

const body = document.body
const timeTitle = document.querySelector("#timeTitle")
const playerPlay = document.querySelector("#playBtn")
const timeControl = document.querySelector("#timeControl")
const playTime = document.querySelector("#startTime")
let currentDateHours = new Date().getHours()
let isAudioPlaying = false
let audioWatcher = null

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

const audio = new Audio("../testAudio/test.mp3")

function playAudio(){
    if (isAudioPlaying){
        audio.pause()
        isAudioPlaying=false
        playerPlay.classList.remove("active")
        clearInterval(audioWatcher)
    }else{
        audio.play()
        timeControl.setAttribute("max",String(Math.floor(audio.duration)))
        isAudioPlaying=true
        playerPlay.classList.add("active")
        audioWatcher = setInterval(()=>{
            timeControl.value = audio
            const minutes = Math.floor(audio.currentTime/60)
            const seconds = Math.floor(audio.currentTime%60)
            playTime.textContent = minutes < 1 ? audio.currentTime.toFixed(0) : minutes +":"+seconds
        },1000)
    }
}

function changeVolume(el){
    audio.volume = el.value/100
}

function setAudioTime(el){
    audio.currentTime = el.value
}


useEffect(async ()=>{
    const albums = await getAlbums()
})