// setInterval(() => {
//   const moleHeads = document.querySelectorAll('.wgs__mole-head');
//   console.log(moleHeads);
//   moleHeads.forEach((moleHead) => {
//     console.log(moleHead);
//     moleHead.classList.toggle('wgs__mole-head--hidden');
//   });
// }, 1000);

const pf = document.getElementsByClassName('pf');
const wacked = document.getElementById('moles-wacked-num');
const left = document.getElementById('moles-left-num');
const winner = document.getElementById('winner');

function popUpRandomMole() {
  const moleHeads = document.querySelectorAll('.wgs__mole-head:not(.wgs__mole-head--wacked)');
  let randomNumber = Math.floor(Math.random() * moleHeads.length);
  if (moleHeads.length <= 0) {
    return;
  }

  moleHeads[randomNumber].classList.remove('wgs__mole-head--hidden');

  setTimeout(hideMole, 750, moleHeads[randomNumber]);
}

function hideMole(moleHead) {
  moleHead.classList.add('wgs__mole-head--hidden');
  setTimeout(popUpRandomMole, 1000);
}

popUpRandomMole();

pf[0].addEventListener('click', (event) => {
  const moleHead = event.target;
  if (moleHead.classList[0] === 'wgs__mole-head') {
    wacked.innerHTML = Number(wacked.innerHTML) + 1;
    left.innerHTML -= 1;
    moleHead.classList.add('wgs__mole-head--hidden');
    moleHead.classList.add('wgs__mole-head--wacked');
  }
  if (Number(left.innerHTML) === 0) {
    winner.innerHTML = 'You Win!!';
  }
});
