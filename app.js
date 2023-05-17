const pianoKeys = document.querySelectorAll('.key');

function playSound(newUrl) {
  console.log(newUrl);
  const audio = new Audio(newUrl);
  audio.play();

  // Change opacity of clicked key
  this.style.opacity = '0.9';

  // Revert opacity back to 1 after 0.5 seconds
  setTimeout(() => {
    this.style.opacity = '1';
  }, 500);
}

pianoKeys.forEach((pianoKey, i) => {
  const number = i < 9 ? '0' + (i + 1) : (i + 1);
  const keys = ['02', '04', '06', '09', '11', '14', '16', '18', '21', '23', '01', '03', '05', '07', '08', '10', '12', '13', '15', '17', '19', '20', '22', '24'];
  const newUrl = '24-piano-keys/key' + keys[i] + '.mp3';
  pianoKey.addEventListener('click', playSound.bind(pianoKey, newUrl));
});

var width = window.innerWidth;
var height = window.innerHeight;
console.log('Width: ' + width + ', Height: ' + height);
