const modal = document.querySelector('.modal-overlay');
const modalExit = document.querySelector('.exit');
const modalButton = document.querySelector('.hero-button');
const mobileMenuExit = document.querySelector('.menu-exit')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuOpenButton = document.querySelector('.button-mobile')

const modalStatuses = {
    open: 'visible',
    close: 'hidden'
}

const modalBootstrap = () => {
    modalExit.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.visibility = modalStatuses.close;
});

modalButton.addEventListener('click', (event) => {
    event.preventDefault();
    if(modal.style.visibility === modalStatuses.open) {
        modal.style.visibility = modalStatuses.close;
    } else {
        modal.style.visibility = modalStatuses.open;
    }
});

modal.addEventListener('click', (event) => {
    event.preventDefault();

    const target = event.target;

    if(target.classList.contains('modal-overlay')) {
        modal.style.visibility = modalStatuses.close;
    }
});
}

const mobileMenuBootstrap = () => {
    mobileMenuExit.addEventListener('click', (event) => {
        event.preventDefault();
    mobileMenu.style.visibility = modalStatuses.close;
});

mobileMenuOpenButton.addEventListener('click', (event) => {
    event.preventDefault();
    if(mobileMenu.style.visibility === modalStatuses.open) {
        mobileMenu.style.visibility = modalStatuses.close;
    } else {
        mobileMenu.style.visibility = modalStatuses.open;
    }
});
}

modalBootstrap()
mobileMenuBootstrap()