import {createAlbum} from "./utils.mjs";

const createform = document.querySelector("#createForm")

createform.onsubmit = async (ev)=>{
    ev.preventDefault()
    const albumName = createform.querySelector("input[name='albumName']").value
    const albumIcon = createform.querySelector("input[name='albumIcon']").files[0]
    const songName = createform.querySelector("input[name='songName']").value
    const songFile = createform.querySelector("input[name='songFile']").files[0]
    const formData = new FormData()
    formData.append("icon", albumIcon)
    formData.append("name", albumName)
    formData.append("songs[][name]", songName);
    formData.append("songs[][file]", songFile, "black-pistol-fire-yet-again.mp3");
    try{
        await createAlbum(formData)
        alert("success")
    }catch (e){
        alert(e)
    }

}