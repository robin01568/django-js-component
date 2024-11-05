

// checkbox checked start
function robinChecks(className) {
    const selectAll = event.target;
    document.querySelectorAll(`.${className}`).forEach(choice => {
        choice.checked = selectAll.checked;
    });
}
// checkbox checked end


// robinGET api fetch data start
// it is example for this js code
// let data = {
//     url: '',
//     datas: {
//         [key]: id,
//     },
//     success: {
//         "id": result_show_id,
//         "class_": ""
//     }
// };
// robinGET(data);
function robinGET(data) {
    return new Promise((resolve, reject) => {
        let url = data.url;
        let datas = data.datas;
        let success_id = data.success.id;

        let queryString = Object.keys(datas)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(datas[key])}`)
        .join('&');

        fetch(`${url}?${queryString}`, {
        method: 'GET'
        })
        .then(response => response.text())
        .then(data => {
        if (url) {
            document.getElementById(`${success_id}`).innerHTML = data;
        } else {
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;
            let newContent = tempDiv.querySelector(`#${success_id}`).innerHTML;
            document.getElementById(`${success_id}`).innerHTML = newContent;
        }
        resolve();
        })
        .catch(error => {
        reject(error);
        });
    });
}
// robinGET api fetch data end

