function loadAnnouncements() {
    let announcements = document.querySelectorAll(".glide__slide")
    let buttonList = `<div class="glide__bullets" data-glide-el="controls[nav]">`
    let y = 0
    announcements.forEach(function(element) {
        buttonList += `<button class="glide__bullet" aria-label="Go to slide ${y}" data-glide-dir="=${y}"><i class="fa fa-circle" aria-hidden="true"></i></button>`
        y++
    })

    buttonList += "</div>"
    
    //document.getElementById("bullets").innerHTML += buttonList

    bullets = document.querySelectorAll(".glide__slide")
    bullets.forEach(function(element) {
        element.innerHTML += buttonList

    })

    new Glide('.glide').mount()


}

//anything that needs the page to have loaded before executing
window.onload = function() {
    loadAnnouncements()
}

