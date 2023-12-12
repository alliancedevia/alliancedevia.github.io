//INTERalliance Index Functions. Functions added to this are available on every page.

//This function detects whether a user is accessing the site on Desktop or Mobile.
let mode;
let test;
function checkMobile() {
    if (window.innerWidth > 885) {
        mode = "desktop"
        document.querySelectorAll(".mobile-collapsible").forEach(function(collapsible) {
            collapsible.open = true
            text = collapsible.outerHTML
            text = text.replace('open=""', 'open="" onclick="return false"')
            collapsible.outerHTML = text
        })
    }
    else {
        mode = "mobile"
        document.querySelectorAll(".mobile-collapsible").forEach(function(collapsible) {
            collapsible.open = false
            text = collapsible.outerHTML
            text = text.replace('onclick="return false"', '')
            collapsible.outerHTML = text
        })
    }
    return mode;
}
checkMobile()

window.addEventListener("resize", function(event) {
    checkMobile()
})

function openCollapsible(button) {
    button.classList.toggle("active");
    var content = button.nextElementSibling;
    if (content.style.display === "flex") {
    content.style.display = "none";
    } else {
    content.style.display = "flex";
    }
};


function dropdown(section) {
    checkMobile()
    if (mode == "desktop") {
        window.location = `/${section}`
    }
    else {
        document.getElementById(`${section}-dropdown`).className = "dropdown-content active"
    }

}


//This functions closes any and all of the dropdown menus if the user taps outside of the popup.
window.onclick = function(event) {
    console.log(event.target)
    if (!event.target.matches('#about-us-header')) {
        document.getElementById("about-us-dropdown").className = "dropdown-content"

    }
    if (!event.target.matches('#programs-header')) {
        document.getElementById("programs-dropdown").className = "dropdown-content"

    }
    if (!event.target.matches('#chapters-header')) {
        document.getElementById("chapters-dropdown").className = "dropdown-content"

    }
} 


let index;
//This function requests the dropdown menu content, and calls Load Index to display this content on the page.
async function requestIndex() {
    //request modpacks
    try {
        let connection = await fetch("/dynamic/index.json");
        index = await connection.json();
    }
    catch (error) {
        console.log(error, source)
    }
    //loadIndex(index)
    
}

//This function loads dropdown content onto the page.
function loadIndex(index) {
    //ABOUT US
    document.getElementById("links").innerHTML += `
    <div id="dynamic-about-us" class='dropdown'>
        <button onclick="dropdown('about-us')" id="about-us-header" class="header-link" href="/about-us">About Us</button>
        <div class="dropdown-content" id="about-us-dropdown">
        </div>
    </div>`
    index.about_us.forEach(element => {
        document.getElementById("about-us-dropdown").innerHTML += 
        `<a class="display-${element.display}" href="${element.href}">${element.title}</a>`
    });
    document.getElementById("links").innerHTML += `<span class="spacer">|</span>`
    //PROGRAMS
    document.getElementById("links").innerHTML += `
    <div id="dynamic-programs" class='dropdown'>
        <button onclick="dropdown('programs')" id="programs-header" class="header-link" href="/programs">Programs</button>
        <div class="dropdown-content" id="programs-dropdown">
        </div>
    </div>`
    index.programs.forEach(element => {
        document.getElementById("programs-dropdown").innerHTML += 
        `<a class="display-${element.display}" href="${element.href}">${element.title}</a>`
    });
    document.getElementById("links").innerHTML += `<span class="spacer">|</span>`
    //CHAPTERS
    document.getElementById("links").innerHTML += `
    <div id="dynamic-chapters" class='dropdown'>
        <button onclick="dropdown('chapters')" id="chapters-header" class="header-link" href="/programs">Chapters</button>
        <div class="dropdown-content" id="chapters-dropdown">
        </div>
    </div>`
    index.chapters.forEach(element => {
        document.getElementById("chapters-dropdown").innerHTML += 
        `<a class="display-${element.display}" href="${element.href}">${element.title}</a>`
    });
    document.getElementById("links").innerHTML += `<span class="spacer">|</span>`
    //DONATE
    document.getElementById("links").innerHTML +=  `<a class="header-link white-button" href="https://interalliance.networkforgood.com/projects/163950-general-donation-page">Donate</a>`


}

//This initializes the dropdown code.
//requestIndex()


//This section of the code handles the Dark Mode popup.
document.querySelector("body").innerHTML += `<img onclick="theme('dark')" id="new-dark" src="/images/dark.webp" class="" alt="Dark Mode">`

//Checks if the user has already turned on Dark Mode.
if (localStorage.darkMode == "true") {
    theme("dark")
}
else {
    theme("light")
}


//This function switches Dark Mode on and off.
function theme(theme) {
    //DARK MODE
    if (theme == "dark") {
        document.getElementById("theme").href = '/css/dark.css'
        document.getElementById("new-dark").outerHTML = `<img onclick="theme('light')" id="new-dark" src="/images/light.webp" class="" alt="Light Mode">`
        localStorage.darkMode = "true"
    }
    //LIGHT MODE
    else {
        localStorage.darkMode = "false"
        document.getElementById("theme").href = '/css/light.css'
        document.getElementById("new-dark").outerHTML = `<img onclick="theme('dark')" id="new-dark" src="/images/dark.webp" class="" alt="Dark Mode">`


    }
}
