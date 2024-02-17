export function setStorage(storeData){
    localStorage.setItem("login-info",JSON.stringify(storeData))
}


export function getStorage(){
    return JSON.parse(localStorage.getItem("login-info"))
}


export function hasStorage(){
    if(localStorage.getItem("login-info")){
        return true
    }
    else{
        return false
    }
}


export function clearStorage(){
    localStorage.clear()
}