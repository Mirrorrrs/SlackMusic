import {createAlbum} from "./utils.mjs";
const addSongBtn = document.getElementById("addSongBtn")
const createform = document.querySelector("#createForm")
const formSongs = document.querySelector(".songs")
const albumIconSelect = document.querySelector("#albumIconSelect")
let lastSongId = 0

function bindBtns(){
    const songs = document.querySelectorAll(".song")
    Array.from(songs).forEach(el=>{
        el.querySelector(".songFile input").onchange = (ev)=>{
            const file = ev.target.files[0]
            if (file){
                el.querySelector(".songFile span").classList.add("selected")
            }
        }
    })
}

bindBtns()

function createSongTemplate(){
    lastSongId++
    const template = new DOMParser().parseFromString(`
                    <div class="song" id="song_${lastSongId}">
                        <label class="songFile">
                            <input type="file" name="songFile" id="">
                            <span>
                                +
                            </span>
                        </label>
                        <input type="text" name="songName" placeholder="Название песни"/>
                    </div>
    `, "text/html").body.querySelector(".song")
    return template
}

"pjfpwejfiwjepf/ofdjwpejfi"

createform.onsubmit = async (ev)=>{
    ev.preventDefault()
    const albumName = createform.querySelector("input[name='albumName']").value
    const albumIcon = createform.querySelector("input[name='albumIcon']").files[0]
    const songs = createform.querySelectorAll(".song")
    const formData = new FormData()
    formData.append("icon", albumIcon)
    formData.append("name", albumName)
    Array.from(songs).forEach(el=>{
        const songName = el.querySelector("input[name='songName']").value
        const songFile = el.querySelector("input[name='songFile']").files[0]
        formData.append("songs[][name]", songName);
        formData.append("songs[][file]", songFile);
    })
    try{
        await createAlbum(formData)
        alert("success")
    }catch (e){
        alert(e)
    }
}

addSongBtn.onclick = ()=>{
    formSongs.append(createSongTemplate())
    bindBtns()
}

albumIconSelect.querySelector("input").onchange = (ev)=>{
    const file = ev.target.files[0]
    if (file){
        const link = URL.createObjectURL(ev.target.files[0])
        albumIconSelect.querySelector(".rectImg").classList.remove("hidden")
        albumIconSelect.querySelector("img").src = link
    }
}

