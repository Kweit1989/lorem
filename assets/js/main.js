document.addEventListener('DOMContentLoaded', function() {
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
});
