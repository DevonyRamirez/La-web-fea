
const pato = document.getElementById('pato');

if (pato) {
  pato.style.position = 'fixed';
  pato.style.left = '0px';
  pato.style.top = '0px';
  pato.style.zIndex = '9999';

  window.addEventListener('mousemove', (evento) => {
    const x = evento.clientX;
    const y = evento.clientY;
    pato.style.left = `${x}px`;
    pato.style.top = `${y}px`;
  });
}