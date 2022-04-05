const player = document.querySelector("#player")

export class AudioPlayer {
    constructor() {
        this.audio = new Audio()
        this.audioPlaying = false
        this.playList = []
        this.timeline = player.querySelector("#timeControl")
        this.volumeControll = player.querySelector("#volumeControl")
        this.songImage = player.querySelector("#songImage")
        this.playBtn = player.querySelector("#playBtn")
        this.startTimeIndicator = player.querySelector("#startTime")
        this.totalTimeIndicator = player.querySelector("#totalTime")
        this.volume = 50
        this.currentTime = 0
        this.duration = 0
        this.bind()
    }

    bind(){
        this.volumeControll.onchange = this.changeVolume.bind(this)
        this.timeline.onchange = this.setAudioTime.bind(this)
        this.playBtn.onclick = this.toggleAudio.bind(this)
        this.audio.ontimeupdate = (ev)=>{
            this.currentTime = ev.target.currentTime
            this.timeline.value = this.currentTime
            this.setTotalTime(ev.target.duration)
            this.setStartTime(ev.target.currentTime)
        }
    }


    playAudio(src, songImageUri){
        clearInterval(this.playbackInterval)
        this.playList = src
        this.songImage.setAttribute("src",songImageUri)
        this.audio.src = this.playList[0]
        this.timeline.setAttribute("max",Math.floor(this.audio.duration))
        this.audio.volume = this.volume / 100
        this.audio.play()
        this.audioPlaying = true
        this.playBtn.classList.add("active")
    }

    setStartTime(val){
        this.currentTime = val
        const minutes = Math.floor(this.currentTime / 60)
        let  seconds = Math.floor(this.currentTime % 60)
        seconds = String(seconds).length < 2 ? "0" + String(seconds) : seconds
        this.startTimeIndicator.textContent = minutes + ":"+seconds
    }

    setTotalTime(val){
        this.duration = val
        const minutes = Math.floor(this.duration / 60)
        let  seconds = Math.floor(this.duration % 60)
        seconds = String(seconds).length < 2 ? "0" + String(seconds) : seconds
        this.totalTimeIndicator.textContent = minutes + ":"+seconds
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
        this.volume = ev.target.value
        this.audio.volume = this.volume / 100
    }

    setAudioTime(ev) {
        const el = ev.target
        this.audio.currentTime = el.value
        this.currentTime = el.value
    }
}


