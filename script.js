const bulb = document.querySelector("#bulb");
const button = document.querySelector("#switch");

button.addEventListener("click", function() {
    if(bulb.src.match("off")) {
        bulb.src = "./bulb-on.png";
        button.innerHTML = "Turn Off";
    } else {
        bulb.src = "./bulb-off.png";
        button.innerHTML = "Turn On";
    }
});