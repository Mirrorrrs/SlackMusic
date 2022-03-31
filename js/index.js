import {AudioPlayer, getAlbums, useEffectCorrect} from "./utils.mjs";
import {playerPlayBtn, toggleAudio} from "./player.mjs";
let isAudioPlaying = false
let audioWatcher = null
const playerPlay = document.querySelector("#playBtn")
const timeControl = document.querySelector("#timeControl")
const playTime = document.querySelector("#startTime")
const albumsNode = document.querySelector("#albums")
const audio = new AudioPlayer()
let albums = null

function playAudio(albumId) {
    const songs = albums[albumId].songs
    audio.setSrc(`http://${songs[0].fileLink}`)
    audio.playAudio()
}

playerPlayBtn.onclick = toggleAudio.bind(this,audio,playerPlayBtn)

function createAlbumCard(name, date, icon,index, playAudio) {
    const playBtnId = `album_${index}`
    const cardTemplate = new DOMParser().parseFromString(`
                <div class="albumCards">
                        <div class="albumCard">
                            <div class="albumCardContent">
                                <div class="icon">
                                    <img src="http://${icon}" alt="">
                                </div>
                                <button class="playBtn" id="${playBtnId}">
                                    <svg role="img" height="24" width="24" viewBox="0 0 24 24"
                                         class="Svg-sc-1bi12j5-0 hDgDGI">
                                        <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                                    </svg>
                                </button>
                            </div>
                            <h4 class="title">
                               ${name}
                            </h4>
                            <span>${date}</span>
                        </div>
                </div>
    `, "text/html").body.querySelector(".albumCard")
    cardTemplate.querySelector(`#${playBtnId}`).onclick = ()=>{
        playAudio()
    }
    return cardTemplate
}

useEffectCorrect(async () => {
    let data = (await getAlbums()).data
    albums = data
    data.forEach((album, index) => {
        const albumCard = createAlbumCard(album.name, album.created_at, album.icon,index, playAudio.bind(this,index))
        albumsNode.append(albumCard)
    })
})

