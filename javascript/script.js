    const sonic = document.querySelector('.sonic');
    const robo = document.querySelector('.robo');

    function jump() {
        sonic.classList.add('jump');
    
        setTimeout(() =>{
            sonic.classList.remove('jump');
        }, 500);
    }

    const loop = setInterval(() => { 

        console.log('loop')

        const roboPosition = robo.offsetLeft;
        const sonicPosition = + window.getComputedStyle(sonic).bottom.replace('px', '');

        console.log(sonicPosition);

        if (roboPosition <= 70 && roboPosition > 0 && sonicPosition < 150) {

            robo.style.animation = 'none'; 
            robo.style.left = `${roboPosition}px`;

            sonic.style.animation = 'none';
            sonic.style.bottom = `${sonicPosition}px`;

            sonic.src = '../img/gameover.png';
            sonic.style.width = '75px'
            sonic.style.marginLeft = '50px'

            clearInterval(loop);
            
            alert('reinicie o jogo')
            location.reload();
            return false;
        }

    }, 10);


    document.addEventListener('keydown', jump);




