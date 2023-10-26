let announcements;
//load all dynamic content onto page
async function requestAnnouncements() {
    //request modpacks
    try {
        let connection = await fetch("/dynamic/announcements.json");
        announcements = await connection.json();
    }
    catch (error) {
        console.log(error, source)
    }
    loadAnnouncements(announcements)
    
}

function loadAnnouncements(announcements) {
    let buttonList = "";
    for (y in announcements) {
        buttonList += `<button class="glide__bullet" aria-label="Go to slide ${y}" data-glide-dir="=${y}"><i class="fa fa-circle" aria-hidden="true"></i></button>`
    }
    for (x in announcements) {
        document.getElementById("dynamic-slides").innerHTML += 
            `<li class="glide__slide unskew">
                <h1 class="museo-header">${announcements[x].title}</h1>
                <p>${announcements[x].description}</p>
                <a class="slide-button" href="${announcements[x].button_url}">${announcements[x].button_title}</a>
                <div class="glide__bullets" data-glide-el="controls[nav]">
                    ${buttonList}

                </div>
             </li>`
    }


    new Glide('.glide').mount()


}

requestAnnouncements()