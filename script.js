let detik = 00;
let milidetik = 00;
const tDetik = document.querySelector('.detik');
const tMilidetik = document.querySelector('.milidetik');
const bStart = document.querySelector('.bStart');
const bStop = document.querySelector('.bStop');
const bReset = document.querySelector('.bReset');
let interval;

function startTimer() {
  milidetik++;
  if (milidetik < 9) {
    tMilidetik.innerHTML = '0' + milidetik;
  }
  if (milidetik > 9) {
    tMilidetik.innerHTML = milidetik;
  }
  if (milidetik > 99) {
    detik++;
    tDetik.innerHTML = '0' + detik;
    milidetik = 0;
    tDetik.innerHTML = '0' + 0;
  }
  if (detik > 9) {
    tDetik.innerHTML = detik;
  }
}

bStart.addEventListener('click', () => {
  interval = setInterval(startTimer);
});

bStop.addEventListener('click', () => {
  clearInterval(interval);
});

bReset.addEventListener('click', () => {
  clearInterval(interval);
  milidetik = '00';
  detik = '00';
  tDetik.innerHTML = detik;
  tMilidetik.innerHTML = milidetik;
});
