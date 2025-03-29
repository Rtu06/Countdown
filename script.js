let countdown;
document.getElementById("startBtn").addEventListener("click", function () {
    let timeLeft = parseInt(document.getElementById("timeInput").value);
    if (isNaN(timeLeft) || timeLeft <= 0) {
        alert("Vui lòng nhập số giây hợp lệ!");
        return;
    }
    
    clearInterval(countdown);
    
    countdown = setInterval(function () {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById("countdown").textContent =
            `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        
        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert("Hết giờ!");
        } else {
            timeLeft--;
        }
    }, 1000);
});
