// Створити ф-ію timer, яка приймає число(секунди) та імітує поведінку таймера:
// кожну секунду виводить в консоль стрічку Timer: ${s}, де ${s} - кількість секунд що залишилось

function timer(seconds) {
    let remainingTime = seconds;

    function updateTimer() {
        console.log(`Timer: ${remainingTime}s`);
        remainingTime--;

        if (remainingTime < 0) {
            clearInterval(intervalId);
            console.log('Timer is complete!');
        }
    }
    const intervalId = setInterval(updateTimer, 1000);
}

timer(10);
