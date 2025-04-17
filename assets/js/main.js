document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.menu-item > a');
  const menuBg = document.querySelector('.menu-bg');

  const headerImg = document.querySelector('.header-img');
  const bodyImgLeft = document.querySelector('.body-img-left')
  const bodyImgRight = document.querySelector('.body-img-right')

  const socialLink = document.querySelectorAll('.footer-social > a');

  function setFullHeight() {
      const headerHeight = 69; 
      const viewportHeight = window.innerHeight;
      const adjustedHeight = viewportHeight - headerHeight;

      document.querySelectorAll('.header, .header-img').forEach(element => {
          element.style.height = `${adjustedHeight}px`; 
      });
  }

  // Инициализация высоты при загрузке
  setFullHeight();

  // Используем requestAnimationFrame для предотвращения "прыжков"
  window.addEventListener('resize', () => {
      window.requestAnimationFrame(setFullHeight);
  });

  let isFaded = true;
  let waveForward = true;

  setInterval(() => {
    const isWideScreen = window.innerWidth >= 1900;

    // Меняем диапазон в зависимости от ширины экрана
    headerImg.style.opacity = isFaded ? (isWideScreen ? '1' : '0.5') : '0.1';
    bodyImgLeft.style.opacity = isFaded ? (isWideScreen ? '1' : '0.5') : '0.1';
    bodyImgRight.style.opacity = isFaded ? (isWideScreen ? '1' : '0.5') : '0.1';

    menuItems.forEach(item => {
        item.classList.toggle('active', isFaded);
    });

    const links = waveForward ? [...socialLink] : [...socialLink].reverse();

    links.forEach((link, index) => {
        setTimeout(() => {
            link.classList.remove('jump');
            void link.offsetWidth;
            link.classList.add('jump');
        }, index * 150);
    });

    waveForward = !waveForward; // смена направления волны
    isFaded = !isFaded;
    }, 3000);



    function updateMenuBg() {
        if (window.scrollY > 0) {
          menuBg.style.bottom = '0px';
        } else {
          menuBg.style.bottom = '84px';
        }
      }
    
      window.addEventListener('scroll', updateMenuBg);
    
      // Чтобы проверить состояние сразу при загрузке
      updateMenuBg();
});
