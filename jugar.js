const jgOverlay = document.getElementById('jg-overlay');
const jgBtnJugar = document.getElementById('jg-btn-jugar');
const jgCerrar = document.getElementById('jg-cerrar');
const jgToast = document.getElementById('jg-toast');

let jgIntentos = 0;
let jgIntentosSiNo = 0;
const JG_MAX_INTENTOS_SINO = 3;

function jgAbrirModal() {
  jgOverlay.classList.add('jg-abierto');
  jgMostrarFase(1);
  const pato = document.getElementById('pato');
  if (pato) pato.style.display = 'none';
  jgMostrarToast('Lograste hacer click en JUGAR 🏆');
}

function jgCerrarModal() {
  jgOverlay.classList.remove('jg-abierto');
  const pato = document.getElementById('pato');
  if (pato) pato.style.display = '';
}

function jgMostrarFase(numero) {
  document.querySelectorAll('.jg-fase').forEach(f => f.classList.remove('jg-activa'));
  document.getElementById('jg-fase' + numero).classList.add('jg-activa');
}

function jgToggleGato(el) {
  el.classList.toggle('jg-seleccionado');
}

function jgVerificarCaptcha() {
  jgIntentos++;
  const errorEl = document.getElementById('jg-captcha-error');
  if (jgIntentos < 3) {
    errorEl.textContent = 'Incorrecto, intenta de nuevo';
    jgMostrarToast('Lograste equivocarte 🏆');
  } else {
    errorEl.textContent = '';
    jgMostrarFase(2);
  }
}

function jgClickSi() {
  const btnSi = document.getElementById('jg-btn-si');
  const btnNo = document.getElementById('jg-btn-no');

  if (jgIntentosSiNo < JG_MAX_INTENTOS_SINO) {
    jgIntentosSiNo++;
    jgMostrarToast('Lograste hacer click en Sí 🏆');
    if (jgIntentosSiNo >= JG_MAX_INTENTOS_SINO) {
      btnSi.style.visibility = '';
      btnNo.style.visibility = 'hidden';
    } else {
      btnSi.style.visibility = 'hidden';
      btnNo.style.visibility = '';
    }
    return;
  }

  jgMostrarToast('Lograste hacer click 🏆');
  setTimeout(() => jgMostrarFase(3), 1000);
}

function jgClickNo() {
  if (jgIntentosSiNo >= JG_MAX_INTENTOS_SINO) return;

  jgIntentosSiNo++;
  jgMostrarToast('Lograste hacer click en No 🏆');
  const btnSi = document.getElementById('jg-btn-si');
  const btnNo = document.getElementById('jg-btn-no');
  if (jgIntentosSiNo >= JG_MAX_INTENTOS_SINO) {
    btnSi.style.visibility = '';
    btnNo.style.visibility = 'hidden';
  } else {
    btnNo.style.visibility = 'hidden';
    btnSi.style.visibility = '';
  }
}

function jgClickPagar() {
  window.open('https://www.mercantilbanco.com/', '_blank');
  jgMostrarToast('Lograste hacer click en un scam 🏆');
}

let jgToastTimeout = null;

function jgMostrarToast(texto) {
  jgToast.textContent = texto;
  jgToast.classList.add('jg-mostrar');
  clearTimeout(jgToastTimeout);
  jgToastTimeout = setTimeout(() => jgToast.classList.remove('jg-mostrar'), 2500);
}

jgBtnJugar.addEventListener('click', jgAbrirModal);
jgCerrar.addEventListener('click', jgCerrarModal);
