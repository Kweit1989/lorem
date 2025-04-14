document.addEventListener('DOMContentLoaded', function() {
    const headerImg = document.getElementById('header-img');
    let isFaded = true;
  
    setInterval(() => {
      headerImg.style.opacity = isFaded ? '0.5' : '0.1';
      isFaded = !isFaded;
    }, 3000); // каждые 3 секунды
  });