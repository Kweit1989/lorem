document.addEventListener('DOMContentLoaded', function() {
  const headerImg = document.getElementById('header-img');
  const menuItems = document.querySelectorAll('.menu-item');

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

  setInterval(() => {
      headerImg.style.opacity = isFaded ? '0.5' : '0.1';

      menuItems.forEach(item => {
          item.classList.toggle('active', isFaded);
      });

      isFaded = !isFaded;
  }, 3000);
});
