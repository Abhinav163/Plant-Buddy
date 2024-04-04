document.getElementById('toggle').addEventListener('change', function() {
    document.getElementById("bulb").style.backgroundColor = "yellow";
    var timerDiv = document.getElementById('timer');
    if (this.checked) {
        timerDiv.style.display = 'block';
        var endTime = new Date();
        endTime.setHours(endTime.getHours() + 8);
        function generateRandomNumberDisplay1() {
            var randomNumberDisplay1 = Math.floor(Math.random() * (45 - 32 + 1)) + 32;
            document.querySelector('.display1').textContent = randomNumberDisplay1 + "\u2103";
        }
        function generateRandomNumberDisplay2() {
            var randomNumberDisplay2 = Math.floor(Math.random() * (99 - 75 + 1)) + 75;
            document.querySelector('.display2').textContent = randomNumberDisplay2 + "%";
        }
        function generateRandomNumberDisplay3() {
            var randomNumberDisplay3 = Math.floor(Math.random() * (78 - 40 + 1)) + 40;
            document.querySelector('.display3').textContent = randomNumberDisplay3 + "%";
        }
        generateRandomNumberDisplay1();
        generateRandomNumberDisplay2();
        generateRandomNumberDisplay3();
        var randomNumberInterval = setInterval(function() {
            generateRandomNumberDisplay1();
            generateRandomNumberDisplay2();
            generateRandomNumberDisplay3();
        }, 2 * 60 * 1000);
        var timerInterval = setInterval(function() {
            var now = new Date().getTime();
            var distance = endTime - now;
            if (distance < 0) {
                clearInterval(timerInterval);
                clearInterval(randomNumberInterval);
                timerDiv.innerHTML = 'Time\'s up!';
            } else {
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                timerDiv.innerHTML = hours + 'h ' + minutes + 'm ' + seconds + 's ';
            }
        }, 1000);
    } else {
        timerDiv.style.display = 'none';
        timerDiv.innerHTML = '';
        document.querySelector('.display1').textContent = '--';
        document.querySelector('.display2').textContent = '--';
        document.querySelector('.display3').textContent = '--';
        document.getElementById("bulb").style.backgroundColor = "white";
    }
});