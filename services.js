const fetch = require("node-fetch")
function generateUniqueId() {
    //"123456789"
    let id = "";

    for(let i =0; i < 6; i++) {
        const randNumber = (Math.floor(Math.random()*9))+1;

        id += randNumber;
    }
    return id;
    
}

async function getUnsplashPhoto({name, location}) {
    const   UNSPLASH_URL = `https://api.unsplash.com/photos/random?client_id=-qskuY1xYZ7hVsxKry6wDJRIEhAzVyjk1sswgr5Lcdc&query=${name}${location}`;
    const fetchRes = await fetch(UNSPLASH_URL);
    const data = await fetchRes.json();

    return data.urls.small;
}

module.exports = {generateUniqueId, getUnsplashPhoto}