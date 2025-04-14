document.addEventListener('DOMContentLoaded', function() {
    const headerImg = document.getElementById('header-img');
    const menuItems = document.querySelectorAll('.menu-item');
  
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
  