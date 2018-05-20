

  const getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

   const initializeClock = (id, endtime) => {
    let clock = document.getElementById(id);
    let days = clock.querySelector('.days');
    let hours = clock.querySelector('.hours');
    let minutes = clock.querySelector('.minutes');
    let seconds = clock.querySelector('.seconds');

     const updateClock = () => {
      let t = getTimeRemaining(endtime)

      days.innerHTML = t.days;
      hours.innerHTML = ('0' + t.hours).slice(-2);
      minutes.innerHTML = ('0' + t.minutes).slice(-2);
      seconds.innerHTML = ('0' + t.seconds).slice(-2);
      tickAudio.play();

      // it is for the end, should add a feature

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
  }

  let deadline = '06/08/2018 18:59:59';
  const tickAudio = new Audio('beat.mp3');
  initializeClock('clockdiv', deadline);

