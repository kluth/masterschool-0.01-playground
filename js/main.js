// TODO Stop on reset or 25min

const toggleTimer = () => {
    const timer = document.querySelector('.timer-value');
    var time = 0;
    setInterval(() => {
        time++;
        if(time > 1500) return;
        timer.innerHTML = new Date(time * 1000).toISOString().substr(14, 5);
    }, 10);
}

const resetTimer = () => {
    const timer = document.querySelector('.timer-value');
    timer.innerHTML = '00:00'
}