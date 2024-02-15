document.addEventListener('DOMContentLoaded', function() {
  let mensajeObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.remove('left', 'right');
              entry.target.classList.add('center');
              // Detener la observación después de la animación inicial
              observer.unobserve(entry.target);
          }
      });
  });

  document.querySelectorAll('.mensaje').forEach(mensaje => {
      mensajeObserver.observe(mensaje);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const animatedTitle = document.getElementById('animatedTitle');
  const animatedText = document.getElementById('animatedText');

  animateTitle(animatedTitle);
  animateText(animatedText);
});

function animateTitle(element) {
    const textContent = element.innerHTML; // Usamos innerHTML para mantener los &nbsp; intactos
    element.innerHTML = ''; // Limpiar el contenido inicial
    
    // Dividir el texto en palabras y envolver cada palabra en un span
    const words = textContent.split('&nbsp;');
    words.forEach(word => {
        const wordSpan = document.createElement('span');
        wordSpan.innerHTML = word + '&nbsp;'; // Agregar &nbsp; para mantener la separación entre palabras
        element.appendChild(wordSpan);
    });

    const wordSpans = element.querySelectorAll('span');

    // Agregar animación a cada palabra
    wordSpans.forEach((wordSpan, index) => {
        wordSpan.style.display = 'inline-block';
        wordSpan.style.opacity = '0';
        wordSpan.style.animation = `fadeInWord 2s ${index * 0.1}s forwards`;
    });
}

function animateText(element) {
  const textContent = element.textContent;
  element.textContent = ''; // Limpiar el contenido inicial
  
  // Dividir el texto en letras y envolver cada letra en un span
  for (let i = 0; i < textContent.length; i++) {
      const span = document.createElement('span');
      span.textContent = textContent[i];
      if (textContent[i] === ' ') {
          span.innerHTML = '&nbsp;'; // Reemplazar espacio en blanco con &nbsp; para mantenerlo visible
      }
      element.appendChild(span);
  }

  const spans = element.querySelectorAll('span');

  // Agregar animación a cada letra
  spans.forEach((span, index) => {
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.animation = `fadeInLetter 0.5s ${index * 0.1}s forwards`;
  });
}