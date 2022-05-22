// Experimental space
// Get the modal
var modal = document.getElementById('contactme-form');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}


const length = document.querySelector("li:nth-child(1) path").getTotalLength();

// Experimental space



document.getElementById("year").innerHTML = new Date().getFullYear();