// select our keys

const btn = document.querySelectorAll(".key");
let arr = Array.prototype.slice.call(btn);

// function to animate on click event
function clickAnimate(obj) {
        
        obj.addEventListener('click', (key) => {
        
        // console.log(obj);

        // playing the audio
        playAudio(arr.indexOf(obj));

        obj.classList.add('pressed');
        setTimeout( function() {
            obj.classList.remove('pressed');
        }, 100);
    
        });
}

function playAudio(listIndex) {
    let lis = ['bass-drum.mp3', 'snare.mp3', 'hat.mp3', 'bass-drum.mp3', 'tom-1.mp3', 'tom-2.mp3', 'cymbal.mp3', 'sticks.mp3'];
    let audio = new Audio('./audio/'+lis[listIndex]);
    audio.play();
}

// function to animate on keypress

function keypressAnimate(obj) {
    obj.classList.add('pressed');

        // playing the audio
        playAudio(arr.indexOf(obj));

        setTimeout( function() {
            obj.classList.remove('pressed');
        }, 100);
    
}

// for every key, animate on click
btn.forEach((keys) => {
    
    clickAnimate(keys);
    
});

// keypress will be checked for whole body
let bd = document.querySelector('body');


// checking keypress
bd.addEventListener('keypress', (f) => {
    // console.log(f.key);

    // check the key press conditions
    switch(f.key) {
        case "a":
            keypressAnimate(btn[0]);
            break;
        case "s":
            keypressAnimate(btn[1]);
            break;
        case "d":
            keypressAnimate(btn[2]);
            break;
        case "f":
            keypressAnimate(btn[3]);
            break;
        case "g":
            keypressAnimate(btn[4]);
            break;
        case "h":
            keypressAnimate(btn[5]);
            break;
        case "j":
            keypressAnimate(btn[6]);
            break;
        case "k":
            keypressAnimate(btn[7]);
            break;
    }
    
});


function animateKey(key) {
    key.classList.add('pressed');

    setTimeout(() => {
        key.classList.remove('pressed');
    }, 100);
}

function randomBeat() {

    for (let i = 0; i < 32; i++) {
        setTimeout(function() {
            let index = generateNumber(8);
            animateKey(btn[index]);

        }, 1500);
    }
    

}

// generate num random numbers [0 to num-1]

function generateNumber(num) {
    let n = Math.floor(Math.random()*1000);
    n = n%num;
    return n;
}

function playRandomBeat() {
    
    let aud = new Audio('./audio/loop-1.mp3');
    aud.play();
    
    
}


// execute the random function on click event

let random = document.querySelector('.music-button');

random.addEventListener('click', (e) => {
    playRandomBeat();
    randomBeat();
})