document
  .getElementById('scroll-down-btn')
  .addEventListener('click', function () {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  });
