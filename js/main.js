// koneksi ke api-google & penentuan beberapa data channel
import { dus_youtubeChannel_api } from "./dus_youtube_api.js";

// mengambil config json di file config
function get_configYoutubeChannel () {
    
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {

            let results = JSON.parse((this.responseText));
            
            const dataChannels = Object.entries(results);
            // console.log(dataChannel);

            dus_youtubeChannel_api(dataChannels);

        }
    }

    xhr.open('GET', 'js/config/config_youtubeChannel.json', true);
    xhr.send();

}

// pemanggilan function
get_configYoutubeChannel();

