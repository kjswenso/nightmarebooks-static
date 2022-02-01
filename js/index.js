// const controllers = document.querySelectorAll('polygon');
const controllers = document.querySelectorAll('.sample-sound');
controllers.forEach(sample => sample.addEventListener('click', changeAudio));

function changeAudio(e) {
    const elem = e.srcElement;
    const audioSample = document.querySelector(`#${elem.dataset.sampleSound}`);
    if (elem.dataset.isplaying === 'false') {
        audioSample.play();
        elem.dataset.isplaying = true;
     } else {
        audioSample.pause();
        audioSample.currentTime = 0;
        elem.dataset.isplaying = false;
     }
}