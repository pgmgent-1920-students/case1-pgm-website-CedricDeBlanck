(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.btnClick();
    },

    cacheElements () {
      this.filterElement = document.querySelector('.mobile-nav');
      this.btnToggleElement = document.querySelector('.btn-toggle');
      this.iconElement = document.getElementById("icon");
    },

    btnClick () {
      this.btnToggleElement.addEventListener('click', (ev) => {
        (this.filterElement.classList.contains('nav-show')) ? this.filterElement.classList.remove('nav-show') : this.filterElement.classList.add('nav-show');
        (this.iconElement.classList.contains('active')) ? this.iconElement.classList.remove('active') : this.iconElement.classList.add('active');
      });
    },

  };
  app.initialize();
})();