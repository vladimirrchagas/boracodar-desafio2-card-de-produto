const rotateIcon = document.getElementById('rotateIcon');
const xvector = document.getElementById('xVector');
const couch = document.getElementById('couch');
const couchRotation = document.getElementById('couchRotation');

rotateIcon.addEventListener('click', function() {
    xvector.style.display = 'flex';
    couchRotation.style.display = 'flex';
    rotateIcon.style.display = 'none';
    couch.style.display = 'none';
});

xvector.addEventListener('click', function() {
    xvector.style.display = 'none';
    couchRotation.style.display = 'none';
    rotateIcon.style.display = 'flex';
    couch.style.display = 'flex';
});
