'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', openModal); //ne stavljati zagrade jer će se onda prvo izvršavati, a potrebno je tek kad se KLIKNE!

btnClosedModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal(); //ovdje je potrebno staviti zagradu da se izvrši funkcija
  }
});
