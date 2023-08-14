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
import './images/dropdown_white.svg';
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


//brands
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

//repair
const openRepairPopup = document.querySelector('.popup-repair__show');
const closeRepairPopup = document.querySelector('.popup-repair__hide');
const brandRepairHide = document.querySelectorAll('.repair__button-hide')

function toggleRepairPopup() {
    openRepairPopup.classList.toggle('popup-repair__hide');
    closeRepairPopup.classList.toggle('popup-repair__hide');
    
    for (let i = 0; i < brandRepairHide.length; i++) {
        brandRepairHide[i].classList.toggle('repair__button-hide');
    }

}

openRepairPopup.addEventListener('click', toggleRepairPopup);
closeRepairPopup.addEventListener('click', toggleRepairPopup);

//modal__feedback
const popup = document.querySelector('.modal');
const openAsideModal = document.querySelector('.button-aside-call');
const openModal = document.querySelector('.button-call');
const closeModal = document.querySelector('.modal__feedback-button')
const mainFeedbackElement = document.querySelector('.main');
const headerFeedbackElement = document.querySelector('.header')

function toggleModal () {
    popup.classList.toggle('modal-show__feedback')
    headerElement.classList.toggle('modal-header-active')
    mainElement.classList.toggle('modal-header-active');

}

function closeOnKeyOutside(event) {
    if (event.keyCode === 27) {
        popup.classList.remove('modal-show__feedback');
        headerElement.classList.remove('modal-header-active')
        mainElement.classList.remove('modal-header-active');
    }
}

openAsideModal.addEventListener('click', toggleModal)
openModal.addEventListener('click', toggleModal)
closeModal.addEventListener('click', toggleModal)
document.addEventListener('keydown', closeOnKeyOutside)
document.addEventListener('click', function(event) {
    const clickedElement = event.target;
    if (!popup.contains(clickedElement) && !openModal.contains(clickedElement) && !openAsideModal.contains(clickedElement)) {
        popup.classList.remove('modal-show__feedback')
        headerElement.classList.remove('modal-header-active')
        mainElement.classList.remove('modal-header-active');
    }
});


//modal__call
const popupCallModal = document.querySelector('.modal__call');
const openAsideCallModal = document.querySelector('.button-aside-message');
const openCallModal = document.querySelector('.button-message');
const closeCallModal = document.querySelector('.modal__call-button')
const mainElement = document.querySelector('.main');
const headerElement = document.querySelector('.header')

function toggleCallModal () {
    popupCallModal.classList.toggle('modal-show__call')
    mainElement.classList.toggle('modal-active');
    headerElement.classList.toggle('modal-active');
}

function closeCallModalOnKey(event) {
    if (event.keyCode === 27) {
        popupCallModal.classList.remove('modal-show__call');
        mainElement.classList.remove('modal-active');
        headerElement.classList.remove('modal-active');
    }
}

openAsideCallModal.addEventListener('click', toggleCallModal)
openCallModal.addEventListener('click', toggleCallModal)
closeCallModal.addEventListener('click', toggleCallModal)
document.addEventListener('keydown', closeCallModalOnKey)
document.addEventListener('click', function(event) {
    const clickedElement = event.target;
    if (!popupCallModal.contains(clickedElement) && !openCallModal.contains(clickedElement) && !openAsideCallModal.contains(clickedElement)) {
        popupCallModal.classList.remove('modal-show__call')
        mainElement.classList.remove('modal-active');
        headerElement.classList.remove('modal-active');
    }
});

//menu
const popupMenu = document.querySelector('.acide')
const openMenu = document.querySelector('.button-menu')
const closeMenu = document.querySelector('.button-close')
const mainContainer = document.querySelector('.main-container')
const headerMenuActive = document.querySelector('.header-menu-active')


function toggleMenu () {
    popupMenu.classList.toggle('acide-show')
    mainContainer.classList.toggle('modal-active');
    headerMenuActive.classList.toggle('modal-active-header');
}

function closePopupMenu(event) {
    if (event.keyCode === 27) {
        popupMenu.classList.remove('acide-show');
        mainContainer.classList.remove('modal-active');
        headerMenuActive.classList.remove('modal-active-header');
    }
}

openMenu.addEventListener('click', toggleMenu)
closeMenu.addEventListener('click', toggleMenu)
document.addEventListener('keydown', closePopupMenu)
document.addEventListener('click', function(event) {
    const clickedElement = event.target;
    if (!popupMenu.contains(clickedElement) && !openMenu.contains(clickedElement)) {
        popupMenu.classList.remove('acide-show');
        mainContainer.classList.remove('modal-active');
        headerMenuActive.classList.remove('modal-active-header');
    }
});