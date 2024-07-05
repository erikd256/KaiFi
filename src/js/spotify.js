import Librespot from 'librespot'

const spotify = new Librespot()

async function login(){
    if(document.cookie.split(";").some((item) => item.trim().startsWith("spun=") && document.cookie.split(";").some((item) => item.trim().startsWith("sppw=")))){
        var date = new Date(),
        expires = 'expires=';
        expires += date.toUTCString();
        document.cookie = "spun=" + unvalue + ";" + expires;
        document.cookie = "sppw=" + pwvalue + ";" + expires;
        await spotify.login(unvalue, pwvalue)
    }else{
        const unvalue = ('; '+document.cookie).split(`; spun=`).pop().split(';')[0];
        const pwvalue = ('; '+document.cookie).split(`; sppw=`).pop().split(';')[0];
        await spotify.login('username', 'password');
    }
}

export {login, spotify}