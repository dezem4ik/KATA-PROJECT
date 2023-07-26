new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        
        clickable: true,
    }, 

    breakpoints: {
        320: {
            enabled: true,
            slidesPerView: '1.25',
        },
        768: {
            enabled: false,
            slidesPerView: 'auto',
        },
        1120: {
            enabled: false,
            slidesPerView: 'auto',
        }
    }
});

const openButtonPopup = document.querySelector('.popup-button__show');
const closeButtonPopup = document.querySelector('.popup-button__hide');
const brandButtonHide = document.querySelectorAll('.brand-button__hide')
const brandButtonWidth = document.querySelectorAll('.brand-button__hide-width')



openButtonPopup.addEventListener('click', function () {
    openButtonPopup.classList.add('popup-button__hide');
    closeButtonPopup.classList.remove('popup-button__hide');
    
    for (let i = 0; i < brandButtonHide.length; i++) {
        brandButtonHide[i].classList.remove('brand-button__hide');
    }

    for (let i = 0; i < brandButtonWidth.length; i++) {
        brandButtonWidth[i].classList.remove('brand-button__hide-width')
    }
});

closeButtonPopup.addEventListener('click', function () {
    closeButtonPopup.classList.add('popup-button__hide');
    openButtonPopup.classList.remove('popup-button__hide');

    for (let i = 0; i < brandButtonHide.length; i++) {
        brandButtonHide[i].classList.add('brand-button__hide');
    }

    for (let i = 0; i < brandButtonWidth.length; i++) {
        brandButtonWidth[i].classList.add('brand-button__hide-width')
    }
});