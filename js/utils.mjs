export const createAlbum = async (formData) => {
    try {
        const data = await fetch("http://savvaszd.beget.tech/public/api/createAlbum", {
            method: "POST",
            body: formData,
            headers:{}
        })
        const result = await data.json()
        if (result.success){
            return
        }else{
            throw "Something wrong"
        }
    } catch (e) {
        throw e
    }
}

export const getAlbums = async ()=>{
    try {
        const data = await fetch("http://savvaszd.beget.tech/public/api/getAlbums",{
            method:"GET",
        })
        const result = await data.json()
        return result
    }catch (e) {

    }
}

export class AudioPlayer {
    constructor() {
        this.audio = new Audio()
        this.audioPlaying = false
    }

    setSrc(src){
        this.audio.src = src
    }

    playAudio(){
        this.audio.play()
        this.audioPlaying = true
    }

    pauseAudio(){
        this.audio.pause()
        this.audioPlaying = false
    }

    destroyAudio(){
        this.audio=null
    }

    changeVolume(el){
        this.audio.volume = el.value / 100
    }

    setAudioTime(el) {
        this.audio.currentTime = el.value
    }
}


export const useEffectCorrect=(func)=>{
    func()
}