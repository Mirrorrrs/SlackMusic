export const playerPlayBtn = document.querySelector("#playBtn")

export function toggleAudio(audio,el){
    if (audio.audioPlaying){
        audio.pauseAudio()
        el.classList.remove("active")
    }else{
        audio.playAudio()
        el.classList.add("active")
    }
}
