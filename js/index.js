import {getAlbums, useEffectCorrect} from "./utils.mjs";
import {AudioPlayer} from "./player.mjs";
const albumsNode = document.querySelector("#albums")
let albums = null
const audioPlayer = new AudioPlayer()

function playAudio(albumId) {
    const songs = albums[albumId].songs
    audio.setSrc()
    audio.playAudio()
}


function createAlbumCard(name, date, icon,index) {
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
        const songs = albums[index].songs
        audioPlayer.playAudio(`http://${songs[0].fileLink}`, `http://${albums[index].icon}`)
    }
    return cardTemplate
}

useEffectCorrect(async () => {
    let data = (await getAlbums()).data
    albums = data
    data.forEach((album, index) => {
        const albumCard = createAlbumCard(album.name, album.created_at, album.icon,index)
        albumsNode.append(albumCard)
    })
})



