const CONFIG = {
    backgroundImage: 'background.jpg',
    sparkleGif: 'sparkles.gif',
    sideGif: 'side-sparkles.gif',
    cornerImage: 'corner-image.jpg',
    topLeftGif: 'BSGIF1.gif',
    topRightGif: 'BSGIF2.gif',
    windowImage: 'window.jpg',
    personImage: 'person.png',

    // НАСТРОЙКИ РАСПОЛОЖЕНИЯ ОКНА
    windowPosition: {
        top: 'auto',
        right: '170px', 
        bottom: '325px',
        left: 'auto'
    },

    // НАСТРОЙКИ ВИДЕО
    videoSettings: {
        src: 'milo.mp4',
        top: '800px',
        right: 'auto',
        bottom: 'auto',
        left: '850px',
        width: '1200px',
        height: '250px',
        objectFit: 'cover'
    },
    
    // НАСТРОЙКИ КАРТИНКИ MEL
    melSettings: {
        top: '900px',
        right: 'auto',
        bottom: 'auto',
        left: '-600px',
        width: '2450px',
        height: '150px'
    },
    
    // НАСТРОЙКИ КАРТИНКИ TROLLFACE
    trollfaceSettings: {
        top: 'auto',
        right: 'auto',
        bottom: '879px',
        left: '200px',
        width: '1780px',
        height: '180px'
    },

    // НАСТРОЙКИ ТЕКСТА СЛЕВА
    leftTextSettings: {
        // Позиция - сдвигаем левее
        top: '50px',
        right: 'auto',
        bottom: 'auto',
        left: '20px', // Было 50px, теперь 20px
        width: '289px', // Вернул обратную ширину
        
        // Шрифт
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px', // Вернул обратный размер шрифта
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.5', // Вернул обратный межстрочный интервал
        
        // Цвет и эффекты
        color: '#ffffff',
        textShadow: '0 0 10px rgba(255, 255, 255, 0.7)', // Вернул тень
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: '10px 15px', // Уменьшил вертикальные отступы, оставил горизонтальные
        borderRadius: '10px',
        backdropFilter: 'blur(2px)', // Уменьшил блюр в 2 раза
        
        // z-index чтобы был поверх всего
        zIndex: '9999'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    initializeBackground();
    initializeSparkles();
    initializeSideGifs();
    initializeCornerImage();
    initializeTopGifs();
    initializeWindowComposition();
    initializeVideo();
    initializeCustomImages();
    initializeLeftText();
});

document.addEventListener('DOMContentLoaded', function() {
    initializeBackground();
    initializeSparkles();
    initializeSideGifs();
    initializeCornerImage();
    initializeTopGifs();
    initializeWindowComposition();
    initializeVideo();
    initializeCustomImages();
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
    
    windowComposition.style.top = CONFIG.windowPosition.top;
    windowComposition.style.right = CONFIG.windowPosition.right;
    windowComposition.style.bottom = CONFIG.windowPosition.bottom;
    windowComposition.style.left = CONFIG.windowPosition.left;
    
    windowImage.style.backgroundImage = `url('${CONFIG.windowImage}')`;
    personImage.style.backgroundImage = `url('${CONFIG.personImage}')`;
}

function initializeVideo() {
    const video = document.querySelector('.custom-video');
    
    video.src = CONFIG.videoSettings.src;
    
    video.style.top = CONFIG.videoSettings.top;
    video.style.right = CONFIG.videoSettings.right;
    video.style.bottom = CONFIG.videoSettings.bottom;
    video.style.left = CONFIG.videoSettings.left;
    video.style.width = CONFIG.videoSettings.width;
    video.style.height = CONFIG.videoSettings.height;
    video.style.objectFit = CONFIG.videoSettings.objectFit;
    
    video.play().catch(e => {
        console.log('Автовоспроизведение видео заблокировано:', e);
    });
}

function initializeCustomImages() {
    const melImage = document.querySelector('.mel-image');
    const trollfaceImage = document.querySelector('.trollface-image');
    
    // Настройка Mel
    melImage.style.top = CONFIG.melSettings.top;
    melImage.style.right = CONFIG.melSettings.right;
    melImage.style.bottom = CONFIG.melSettings.bottom;
    melImage.style.left = CONFIG.melSettings.left;
    melImage.style.width = CONFIG.melSettings.width;
    melImage.style.height = CONFIG.melSettings.height;
    
    // Настройка Trollface
    trollfaceImage.style.top = CONFIG.trollfaceSettings.top;
    trollfaceImage.style.right = CONFIG.trollfaceSettings.right;
    trollfaceImage.style.bottom = CONFIG.trollfaceSettings.bottom;
    trollfaceImage.style.left = CONFIG.trollfaceSettings.left;
    trollfaceImage.style.width = CONFIG.trollfaceSettings.width;
    trollfaceImage.style.height = CONFIG.trollfaceSettings.height;
}

function initializeLeftText() {
    const leftText = document.querySelector('.left-poem');
    const settings = CONFIG.leftTextSettings;
    
    // Устанавливаем позицию и размер
    leftText.style.top = settings.top;
    leftText.style.right = settings.right;
    leftText.style.bottom = settings.bottom;
    leftText.style.left = settings.left;
    leftText.style.width = settings.width;
    leftText.style.zIndex = settings.zIndex; // Добавляем z-index
    
    // Устанавливаем шрифт
    leftText.style.fontFamily = settings.fontFamily;
    leftText.style.fontSize = settings.fontSize;
    leftText.style.fontWeight = settings.fontWeight;
    leftText.style.fontStyle = settings.fontStyle;
    leftText.style.lineHeight = settings.lineHeight;
    
    // Устанавливаем цвет и эффекты
    leftText.style.color = settings.color;
    leftText.style.textShadow = settings.textShadow;
    leftText.style.backgroundColor = settings.backgroundColor;
    leftText.style.padding = settings.padding;
    leftText.style.borderRadius = settings.borderRadius;
    
    // Устанавливаем текст
    leftText.innerHTML = `
        <div class="poem-text">
            <p>Есть имя благородное</p>
            <p>У девушки одной,</p>
            <p>Красивое и доброе</p>
            <p>В значении неземном.</p>
            <br>
            <p>Ее зовут Алиною —</p>
            <p>Так просто и легко.</p>
            <p>Она и позитивная,</p>
            <p>И дама на все сто!</p>
            <br>
            <p>Хочу тебя поздравить я</p>
            <p>И счастья пожелать.</p>
            <p>Невзгод, ненастья разного</p>
            <p>И тягот не видать.</p>
            <br>
            <p>Пусть их порывом ветренным</p>
            <p>Уносит в долгий путь</p>
            <p>Подальше во Вселенную,</p>
            <p>Чтоб больше не вернуть.</p>
            <br>
            <p>Из сердца вытесняют грусть</p>
            <p>Забота, доброта,</p>
            <p>Печали не узнают пусть</p>
            <p>Красивые глаза.</p>
        </div>
    `;
}