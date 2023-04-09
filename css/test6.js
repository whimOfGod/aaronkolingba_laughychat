AOS.init();

window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card-info');
    const scrollPosition = window.pageYOffset;
  
    cards.forEach(function(card) {
      const cardTop = card.offsetTop;
      const cardHeight = card.offsetHeight;
      const cardBottom = cardTop + cardHeight;
  
      if (scrollPosition >= cardTop && scrollPosition <= cardBottom) {
        const zoomLevel = 1.2; // Niveau de zoom désiré
        const rotationAngle = 15; // Angle de rotation désiré en degrés
        const paragraph = card.querySelector('p');
  
        card.style.transform = `scale(${zoomLevel}) rotate(${rotationAngle}deg)`;
        card.style.backgroundColor = '#333';
        paragraph.textContent = 'Nouveau contenu du paragraphe';
      } else {
        card.style.transform = 'none';
        card.style.backgroundColor = '';
        paragraph.textContent = 'Contenu original du paragraphe';
      }
    });
  });
