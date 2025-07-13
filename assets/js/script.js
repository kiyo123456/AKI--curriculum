let titlePosseJa = document.getElementById('title_ja');
titlePosseJa.innerHTML = 'POSSE - Edited'
let titlePosseEn = document.querySelector(".title_en")
titlePosseEn.innerHTML = 'About POSSE - Edited'
const titleEventJa = document.getElementsByClassName('title_ja')
titleEventJa[1].style.color = "#FF0000"
console.log(titleEventJa.length)
const titleDailyLifeEn = document.querySelectorAll('.title_en')
titleDailyLifeEn[2].style.fontSize = "10px"
let testSection = document.createElement('section')
let testDiv = document.createElement('div')
let testTitle = document.createElement('h1')
testDiv.className = "title"
testTitle.innerHTML = "テスト見出し"
testTitle.className = "title_ja"
let main = document.getElementById('main')
let section5 = main.children[4];
testSection.appendChild(testDiv);
testDiv.appendChild(testTitle)
main.insertBefore(testSection,section5)
let button = document.getElementById('button')
const header = document.getElementById('header')
button.addEventListener('click', function(){
    header.classList.toggle('header_is_open')
})
mainVisual = document.getElementById('main_visual')
window.addEventListener("scroll", function(){
    const scroll = window.scrollY
    const mainHeight = mainVisual.clientHeight
    const headerHeight = header.clientHeight
    if (scroll > mainHeight - headerHeight){
        header.classList.remove('transparent')
    }else{
        header.classList.add('transparent')
    }
    
})

const eventSplideOptions = {
    type: 'loop',
    gap: 40,
    perPage: 3,
    perMove: 1,
    padding: {
        left: '28px',
        right: '28px'
    },
    breakpoints: {
        768: {
            perPage: 1,
        }
    },
    pagination: {
        type: 'bullets',
        clickable: true,
    }
};
new Splide('#about_event',eventSplideOptions).mount();

// const dailyLifeSplideOptions = {
//     type: 'loop',
//     width: 500,
    
// }
// new Splide('#about_daily_life',dailyLifeSplideOptions).mount();


// let splideInstance;
// function handleSplide() {
//     if (window.innerWidth <= 768){
//         if(!splideInstance){
//             splideInstance = new Splide('#about_daily_life',dailyLifeSplideOptions).mount();
//         }
//     } else {
//         if(splideInstance){
//             splideInstance.destroy();
//             splideInstance = null;
//         }
//     }
// }
// if (window.innerWidth > 768) {
//     new Splide('#about_daily_life',dailyLifeSplideOptions).mount();
//     Splide.destroy()
// }
// handleSplide();
// window.addEventListener('resize', handleSplide);




let splide = null;

function checkWidthAndToggleSplide() {
    const isSP = window.innerWidth <= 768;
    const splideElement = document.querySelector('#about_daily_life');
    
    if (!splideElement) {
        console.log('Splide要素が見つかりません');
        return;
    }

    if (isSP) {
        if (!splide) {
            console.log('Splideを初期化します');
            splide = new Splide('#about_daily_life', {
                type: 'loop',
                width: 500
            });
            splide.mount();
        }
    } else {
        if (splide) {
            console.log('Splideを削除します');
            splide.destroy();
            splide = null;
        }
        
        // PC表示時に確実に表示
        splideElement.style.display = 'block';
        splideElement.classList.remove('splide--initialized');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('ページが読み込まれました');
    checkWidthAndToggleSplide();
    window.addEventListener('resize', checkWidthAndToggleSplide);
});
