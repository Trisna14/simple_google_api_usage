
export function dus_youtubeChannel_api (dataChannels) {

    var parameters = {
        'key'   :   'key=',
        'part'  :   '&part=',
        'id'    :   '&id='
    }

    const dataChannel = dataChannels[0][1];

    const key = (dataChannel.key_string.length > 0) ? parameters.key+dataChannel.key_string : '';
    const id = (dataChannel.id.length > 0) ? parameters.id+dataChannel.id : '';
    const part = (dataChannel.part_string.length > 0) ? parameters.part+dataChannel.part_string : '';

    // console.log(dataChanne.url+key+id+part);
    const main_url = dataChannel.url+key+id+part;

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {
            let results = JSON.parse((this.responseText));

            const title = results.items[0].snippet.title;
            const desc = results.items[0].snippet.description;

            // templates
            const channel_class = document.getElementsByClassName('channel')[0];
            const templates_html = `
                <h1>Title : ${title}<h1/>
                <h2>Desc : ${desc}</h2>    
            `;

            channel_class.innerHTML = templates_html;
            
            console.log(results);
        }
    }

    xhr.open('GET', main_url, true);
    xhr.send();

}