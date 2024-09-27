// Change the nav color when it was clicked
const navItems = document.querySelectorAll('.aside ul li a');

navItems.forEach((navbar) => {
  navbar.addEventListener('click', function (event) {
    event.preventDefault();
    navItems.forEach((link) => {
      link.classList.remove('active');
    });

    this.classList.add('active');
  });
});

// Change the nav icon color when it was clicked
const asideIcons = document.querySelectorAll('.aside-icon ul li');

asideIcons.forEach((asideIcon) => {
  asideIcon.addEventListener('click', function () {
    asideIcons.forEach((link) => {
      link.querySelector('a').classList.remove('active');
    });

    this.querySelector('a').classList.add('active');
  });
});
