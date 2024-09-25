// Change the nav color when it was clicked
const navItems = document.querySelectorAll('.aside ul li a');

navItems.forEach((navbar) => {
  navbar.addEventListener('click', function () {
    navItems.forEach((link) => {
      link.classList.remove('active');
    });

    this.classList.add('active');
  });
});
