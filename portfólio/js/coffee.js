// Scroll suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
         });
      }
    });
  });

  // Modal para detalhes do cardápio
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalItems = document.querySelectorAll('.modal-item');
  const closeModal = document.querySelector('.close-modal');

  document.querySelectorAll('.btn-detalhes').forEach(button => {
    button.addEventListener('click', function() {
      const itemId = this.getAttribute('data-item');
      
      // Esconde todos os itens do modal
      modalItems.forEach(item => {
        item.style.display = 'none';
      });
      
      // Mostra apenas o item correspondente
      document.getElementById(itemId).style.display = 'block';
      
      // Mostra o modal
      modalOverlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  closeModal.addEventListener('click', function() {
    modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Fechar modal ao clicar fora
  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
      modalOverlay.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Header scroll effect
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });