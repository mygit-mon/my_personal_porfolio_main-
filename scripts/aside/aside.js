// Active both Aside and Aside-Icon Sync
function linkActiveSync() {
  const asideLinks = document.querySelectorAll('.aside ul li');
  const iconLinks = document.querySelectorAll('.aside-icon ul li');

  function activeLinks(activeIndex) {
    // Removing active class on every aside link
    asideLinks.forEach((asideLink) => {
      asideLink.querySelector('a').classList.remove('active');
    });

    // Removing active class on every icon link
    iconLinks.forEach((iconLink) => {
      iconLink.querySelector('a').classList.remove('active');
    });

    // Adding active on clicked aside link
    asideLinks[activeIndex].querySelector('a').classList.add('active');

    // Adding active on clickec icon link
    iconLinks[activeIndex].querySelector('a').classList.add('active');
  }

  // Adding a click event on every aside link
  asideLinks.forEach((asideLink, index) => {
    asideLink.addEventListener('click', (e) => {
      e.preventDefault();

      activeLinks(index);
    });
  });

  // Adding a click event on every icon link
  iconLinks.forEach((iconLink, index) => {
    iconLink.addEventListener('click', (e) => {
      e.preventDefault();

      activeLinks(index);
    });
  });
}

// Toggle the Aside and Aside-Icon
function toggleAside() {
  const asideToggle = document.querySelector('.aside-toggle');
  const asideToggleIcon = asideToggle.querySelector('.fa');
  const asideMain = document.querySelector('.aside');
  const asideIcon = document.querySelector('.aside-icon');

  window.addEventListener('load', () => {
    if (asideMain.classList.contains('active')) {
      asideToggleIcon.classList.add('fa-caret-right');
    } else {
      asideToggleIcon.classList.add('fa-caret-left');
    }
  });

  asideToggle.addEventListener('click', (e) => {
    asideToggleIcon.classList.toggle('fa-caret-left');
    asideToggleIcon.classList.toggle('fa-caret-right');

    asideMain.classList.toggle('close');
    asideToggle.classList.toggle('close');
    asideIcon.classList.toggle('open');
  });
}

// Active aside mobile
function asideMobileActive() {
  const asideMobileLinks = document.querySelectorAll('.aside-mobile ul li');

  asideMobileLinks.forEach((asideMobileLink) => {
    asideMobileLink.addEventListener('click', function (e) {
      e.preventDefault();

      // Remove active on aside mobile
      asideMobileLinks.forEach((asideMobileLink) => {
        asideMobileLink.querySelector('a').classList.remove('active');
      });

      // Add active on aside mobile
      this.querySelector('a').classList.add('active');
    });
  });
}

function middleAsideMobile() {
  const middleIcon = document.querySelector('.mobile-img');
  const halfCircle = document.querySelector('.half-circle');

  middleIcon.addEventListener('click', () => {
    halfCircle.classList.toggle('open');
  });
}

export { toggleAside, linkActiveSync, asideMobileActive, middleAsideMobile };
