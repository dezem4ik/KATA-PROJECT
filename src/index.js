import './css/index.css';
import './images/arrow-bottom.svg';
import './images/back.jpg';
import './images/call.svg';
import './images/checkstatus.svg';
import './images/close.svg';
import './images/find.svg';
import './images/logo.svg';
import './images/menu.svg';
import './images/message.svg';
import './images/profile.svg';
import './images/repair.svg';
import './images/brands/acer.svg';
import './images/brands/apple.svg';
import './images/brands/bosch.svg';
import './images/brands/dropdown.svg';
import './images/brands/hp.svg';
import './images/brands/lenovo.svg';
import './images/brands/samsung.svg';
import './images/brands/sony.svg';
import './images/brands/viewsonic.svg';

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

