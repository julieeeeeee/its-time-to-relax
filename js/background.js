document.addEventListener('DOMContentLoaded', function(event) {
    let on = false;
    const rain = document.getElementById('rain');
    const coffee = document.getElementById('coffee');
    const fireplace = document.getElementById('fireplace');
    chrome.browserAction.setIcon({path: 'images/work.png'});
    chrome.browserAction.onClicked.addListener(function(tab) {
        if (on) {
            chrome.browserAction.setIcon({path: 'images/work.png'});
            rain.pause();
            coffee.pause();
            fireplace.pause();
        } else {
            chrome.browserAction.setIcon({path: 'images/relax.png'});
            rain.volume = 0.2;
            rain.loop = true;
            coffee.volume = 0.3;
            coffee.loop = true;
            fireplace.volume = 0.3;
            fireplace.loop = true;
            rain.play();
            coffee.play();
            fireplace.play();
        }
        on = !on;
    });
});
