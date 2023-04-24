const faqAccordionHeaders = document.querySelectorAll('.faq-accordion-header');

faqAccordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const isExpanded = header.getAttribute('aria-expanded') === 'true';
    
    header.classList.toggle('x');
    header.setAttribute('aria-expanded', !isExpanded);
    content.setAttribute('aria-hidden', isExpanded);
    content.hidden = isExpanded;
  });
});
