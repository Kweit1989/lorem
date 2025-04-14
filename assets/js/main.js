document.addEventListener('DOMContentLoaded', function() {
  const headerImg = document.getElementById('header-img');
  const menuItems = document.querySelectorAll('.menu-item');

  // Функция для корректировки высоты в зависимости от устройства
  function setFullHeight() {
      const headerHeight = 69; // Высота шапки
      const viewportHeight = window.innerHeight; // Полная высота экрана устройства
      const adjustedHeight = viewportHeight - headerHeight; // Вырезаем высоту шапки
      document.querySelectorAll('.header, .header-img').forEach(element => {
          element.style.height = `${adjustedHeight}px`; // Устанавливаем высоту для этих элементов
      });
  }

  // Запуск функции при загрузке страницы и изменении размера окна
  setFullHeight();
  window.addEventListener('resize', setFullHeight); // Для корректной работы на мобильных устройствах

  let isFaded = true;

  setInterval(() => {
      // Меняем прозрачность у header-img
      headerImg.style.opacity = isFaded ? '0.5' : '0.1';

      // Переключаем класс у всех меню-элементов
      menuItems.forEach(item => {
          item.classList.toggle('active', isFaded);
      });

      isFaded = !isFaded;
  }, 3000);
});
