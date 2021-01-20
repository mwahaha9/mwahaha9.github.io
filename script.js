window.onmessage = function(event){
    if (event.data.indexOf("html") != -1) {
        location.replace(event.data)
    }
};