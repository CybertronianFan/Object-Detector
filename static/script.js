let running = true;

setInterval(function(){
    fetch('/get_fps')
    .then(response => response.text())
    .then(data => {
        document.getElementById('fps-display').innerText = 'FPS: ' + data;
    })
}, 1000);

let toggleButton = document.getElementById('toggle-btn')

function toggleTracking() {
    if (running) {
        fetch('/stop');
        toggleButton.innerText = 'Start Tracking';
        toggleButton.className = 'toggle-btn_Start'
        running = false;
    } else {
        fetch('/start');
        toggleButton.innerText = 'Stop Tracking';
        toggleButton.className = 'toggle-btn_Stop'
        running = true;
    }
}