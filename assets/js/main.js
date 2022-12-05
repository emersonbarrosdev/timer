function timer() {
  const relogio = document.querySelector('.timer')

  function criaHoraDosSegndos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaHoraDosSegndos(segundos);
    }, 1000)
  }

  document.addEventListener('click', function (event) {
    const element = event.target;

    if (element.classList.contains('start')) {
      relogio.classList.remove('paused');
      clearInterval(timer);
      iniciaRelogio();
    }

    if (element.classList.contains('pause')) {
      clearInterval(timer);
      relogio.classList.add('paused');
    }

    if (element.classList.contains('reset')) {
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      segundos = 0;
      relogio.classList.remove('paused');
    }
  });
}

timer();