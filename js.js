let btn = document.querySelectorAll('.butt');

btn.forEach((button) => {
    button.addEventListener('click', () =>  {
        button.classList.add('modif');
        setTimeout(() => {
            button.classList.remove('modif');
        }, 100);
        new Audio('./audio/despacito.mp3').play();

    });

});