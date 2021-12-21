(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header__menu-btn'),
    closeMenuBtn: document.querySelector('.header__menu-close-btn'),
    menu: document.querySelector('.header__menu-mobile'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
