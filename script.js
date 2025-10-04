const CONFIG = {
    backgroundImage: 'background.jpg',
    sparkleGif: 'sparkles.gif',
    sideGif: 'side-sparkles.gif',
    cornerImage: 'corner-image.jpg',
    topLeftGif: 'BSGIF1.gif',
    topRightGif: 'BSGIF2.gif',
    windowImage: 'window.jpg',
    personImage: 'person.png',

        // НАСТРОЙКИ РАСПОЛОЖЕНИЯ ОКНА - МЕНЯЙТЕ ЗДЕСЬ
    windowPosition: {
        top: 'auto',     // или например '100px'
        right: '720px',   // или например '50px'  
        bottom: '900px',  // или например 'auto'
        left: 'auto'     // или например '100px'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    initializeBackground();
    initializeSparkles();
    initializeSideGifs();
    initializeCornerImage();
    initializeTopGifs();
    initializeWindowComposition();
});

function initializeBackground() {
    const background = document.querySelector('.background');
    background.style.backgroundImage = `url('${CONFIG.backgroundImage}')`;
}

function initializeSideGifs() {
    const leftGif = document.querySelector('.left-gif');
    const rightGif = document.querySelector('.right-gif');
    
    leftGif.style.backgroundImage = `url('${CONFIG.sideGif}')`;
    rightGif.style.backgroundImage = `url('${CONFIG.sideGif}')`;
}

function initializeSparkles() {
    const sparklesOverlay = document.querySelector('.sparkles-overlay');
    sparklesOverlay.style.backgroundImage = `url('${CONFIG.sparkleGif}')`;
}

function initializeCornerImage() {
    const cornerImage = document.querySelector('.corner-image');
    cornerImage.style.backgroundImage = `url('${CONFIG.cornerImage}')`;
}

function initializeTopGifs() {
    const leftTopGif = document.querySelector('.left-top-gif');
    const rightTopGif = document.querySelector('.right-top-gif');
    
    leftTopGif.style.backgroundImage = `url('${CONFIG.topLeftGif}')`;
    rightTopGif.style.backgroundImage = `url('${CONFIG.topRightGif}')`;
}

function initializeWindowComposition() {
    const windowComposition = document.querySelector('.window-composition');
    const windowImage = document.querySelector('.window-image');
    const personImage = document.querySelector('.person-image');
    
    // Устанавливаем позицию
    windowComposition.style.top = CONFIG.windowPosition.top;
    windowComposition.style.right = CONFIG.windowPosition.right;
    windowComposition.style.bottom = CONFIG.windowPosition.bottom;
    windowComposition.style.left = CONFIG.windowPosition.left;
    
    windowImage.style.backgroundImage = `url('${CONFIG.windowImage}')`;
    personImage.style.backgroundImage = `url('${CONFIG.personImage}')`;
}