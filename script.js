document.querySelector('body').addEventListener('mousemove', eyeball);

const face = document.querySelector('.face');

document.querySelector('.angry').addEventListener('click', () => {
    face.className = 'face angry'; //*sets face to angry*/
    document.body.style.backgroundColor = "rgb(158, 158, 255)";
});

document.querySelector('.sad').addEventListener('click', () => {
    face.className = 'face sad'; //*sets face to sad*/
    document.body.style.backgroundColor = "rgb(158, 158, 255)";
});
document.querySelector('.disgust').addEventListener('click', () => {
    face.className = 'face disgust'
    document.body.style.backgroundColor = "rgb(158, 158, 255)";
});

document.querySelector('.happy').addEventListener('click', () => {
    face.className = 'face happy';
    document.body.style.backgroundColor = "rgb(158, 158, 255)";
});

face.addEventListener('click', () => {
    face.className = 'face angry';

    document.body.classList.add('shake');

    setTimeout(() => {
        document.body.classList.remove('shake');
    }, 500);
});
const peek = document.querySelector('.peek');
    peek.addEventListener('click', () => {
        face.classList.remove('peek');
        void face.offsetWidth;
        face.classList.add('peek');
        document.body.style.backgroundColor = "black";
});

const lightButton = document.querySelector('.light');
let isLightOn = false;

lightButton.addEventListener('click', () => {
    isLightOn = !isLightOn;

    if(isLightOn){
        face.className = 'face light'; //*sets face to light*/
        document.body.style.backgroundColor = "black";
        lightButton.textContent = 'Light ON';
    }
    else{
        face.className = 'face'; // remove light face
        document.body.style.backgroundColor = "rgb(158, 158, 255)";
        lightButton.textContent = 'Light OFF';
    }
});

function eyeball() {
    let eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
       let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
       let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

       let radian = Math.atan2(event.pageX - x, event.pageY - y);
       let rotate = radian * (180 / Math.PI) * -1 + 270;
       eye.style.transform = `rotate(${rotate}deg)`;
    });
}
