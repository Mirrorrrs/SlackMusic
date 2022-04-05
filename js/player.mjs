export const playerPlayBtn = document.querySelector("#playBtn")
const player = document.querySelector("#player")

export class AudioPlayer {
    constructor() {
        this.audio = new Audio()
        this.audioPlaying = false
        this.timeline = player.querySelector("#timeControl")
        this.volumeControll = player.querySelector("#volumeControl")
        this.songImage = player.querySelector("#songImage")
        this.playBtn = player.querySelector("#playBtn")
        this.bind()
    }

    bind(){
        this.volumeControll.onchange = this.changeVolume
        this.timeline.onchange = this.setAudioTime
        this.playBtn.onclick = this.toggleAudio.bind(this)
    }

    playAudio(src, songImageUri){
        this.songImage.setAttribute("src",songImageUri)
        this.audio.src = src
        this.audio.play()
        this.audioPlaying = true
        this.playBtn.classList.add("active")
    }

    toggleAudio(){
        this.playBtn.classList.toggle("active")
        if (this.audioPlaying){
            this.audio.pause()
            this.audioPlaying = false
        }else{
            this.audio.play()
            this.audioPlaying = true
        }
    }

    pauseAudio(){
        this.audio.pause()
        this.audioPlaying = false
        this.playBtn.classList.remove("active")
    }

    destroyAudio(){
        this.audio=null
    }

    changeVolume(ev){
        const el = ev.target
        this.audio.volume = el.value / 100
    }

    setAudioTime(ev) {
        const el = ev.target
        this.audio.currentTime = el.value
    }
}


export function toggleAudio(audio,el){
    if (audio.audioPlaying){
        audio.pauseAudio()
        el.classList.remove("active")
    }else{
        audio.playAudio()
        el.classList.add("active")
    }
}


