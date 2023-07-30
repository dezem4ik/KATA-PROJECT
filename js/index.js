new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        
        clickable: true,
    }, 

    breakpoints: {
        320: {
            enabled: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
        },
        768: {
            enabled: false,
            slidesPerView: 'auto',
            spaceBetween: 0,
        },
        
    }
});

const openButtonPopup = document.querySelector('.popup-button__show');
const closeButtonPopup = document.querySelector('.popup-button__hide');
const brandButtonHide = document.querySelectorAll('.brand-button__hide')
const brandButtonWidth = document.querySelectorAll('.brand-button__hide-width')

function togglePopup() {
    openButtonPopup.classList.toggle('popup-button__hide');
    closeButtonPopup.classList.toggle('popup-button__hide');
    
    for (let i = 0; i < brandButtonHide.length; i++) {
        brandButtonHide[i].classList.toggle('brand-button__hide');
    }

    for (let i = 0; i < brandButtonWidth.length; i++) {
        brandButtonWidth[i].classList.toggle('brand-button__hide-width')
    }
}

openButtonPopup.addEventListener('click', togglePopup);
closeButtonPopup.addEventListener('click', togglePopup);
