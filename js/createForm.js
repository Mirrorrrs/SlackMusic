import {createAlbum} from "./utils.mjs";
const addSongBtn = document.getElementById("addSong")
const createform = document.querySelector("#createForm")

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
        formData.append("songs[][file]", songFile, "black-pistol-fire-yet-again.mp3");
    })


    try{
        await createAlbum(formData)
        alert("success")
    }catch (e){
        alert(e)
    }
}


addSongBtn.onclick = function addSong(ev){
    const template = new DOMParser().parseFromString(`<div class="song">
                    <input type="text" name="songName">
                    <label class="fileSelect">
                        <input type="file" name="songFile">
                        Аудио
                        <span class="content">
                            <span>Выбрать файл</span>
                        </span>
                    </label>
                </div>`, "text/html").body.querySelector(".song")
    document.getElementById("songs").append(template)
}

