function showVideo() {
    const videoPlayer = document.getElementById('videoPlayer');
    const letras = document.querySelector('.Letras');
    const botonVideo = document.querySelector('.boton_video');
    const botonCanvas = document.querySelector('.boton_canvas');
    
    videoPlayer.style.display = 'block';
    
    setTimeout(() => {
        videoPlayer.classList.add('show');
        letras.classList.add('slide-Up');
        botonVideo.classList.add('slide-Up');
        botonCanvas.classList.add('slide-Up');
    }, 10);
}

