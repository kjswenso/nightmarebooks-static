// const controllers = document.querySelectorAll('polygon');
const controllers = document.querySelectorAll('.sample-sound');
controllers.forEach(sample => sample.addEventListener('click', changeAudio));
controllers.forEach(sample => sample.addEventListener('mouseenter', showTooltip));
controllers.forEach(sample => sample.addEventListener('mouseleave', hideTooltip));


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

function showTooltip(e) {
    const elem = e.srcElement;
    const toolTip = document.getElementById('tooltip');
    toolTip.innerHTML = `Click to pause/play a sample of ${elem.dataset.title}`;
    toolTip.style.display = 'block';
    toolTip.style.left = e.pageX + 10 + 'px';
    toolTip.style.top = e.pageY + 10 + 'px';
}

function hideTooltip() {
    const toolTip = document.getElementById('tooltip');
    toolTip.style.display = 'none';
}