 // Seleccionamos todos los elementos que queremos animar
    const elementosAnimados = document.querySelectorAll('.animar, .animar-izquierda');

    // IntersectionObserver detecta cuando un elemento aparece en pantalla
    const observador = new IntersectionObserver(function(entradas) {
      entradas.forEach(function(entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visible');
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.1 });

    elementosAnimados.forEach(function(el) {
      observador.observe(el);
    });

    // Scroll suave al hacer clic en los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(function(enlace) {
      enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(enlace.getAttribute('href'));
        if (destino) {
          destino.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });