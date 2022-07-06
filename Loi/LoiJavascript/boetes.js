const slider = document.getElementById("mySlider");
let uitkomst = document.getElementById("output");
const feedb = document.getElementById("feedback");
const boetekp = document.getElementById("boetekop");
const staffel = document.getElementById("staffeltabel");
const boetebedr = document.getElementById("boetebedrag");

slider.addEventListener("input", function(){
    checkSliderValue(slider);
});

function checkSliderValue(slider) {
    let slyderValue = slider.value;
    uitkomst.innerHTML = slider.value;
}



let corrSnelheid = slider.value - 50;


if (slider.value < 51) {
    console.log("Leon")
    feedback.innerHTML = "Keurig houden zo."
} 
else if (slider.value > 50 && slider.value < 80) {
    console.log("Demi")
    feedback.innerHTML = "Dat is te hard binnen te bebouwde kom, u riskeert een boete!"
} 
else if (slider.value > 79) {
    console.log("pa")
    feedback.innerHTML = "U riskeert een strafzaak";
}



/*
function bgChange(bg) {
    document.body.style.background = bg;
  }*/