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



export const useEffectCorrect=(func)=>{
    func()
}