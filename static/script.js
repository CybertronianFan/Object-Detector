            setInterval(function(){
                fetch('/get_fps')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('fps-display').innerText = 'FPS: ' + data;
                })
            }, 1000);