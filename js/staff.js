let staff;
//load all dynamic content onto page
async function requestStaff(section) {
    //request modpacks
    try {
        let connection = await fetch("/dynamic/staff.json");
        staff = await connection.json();
    }
    catch (error) {
        console.log(error, source)
    }
    if (section == "board") {
        loadBoard(staff)

    }
    else {
        loadILC(staff)
    }
    
}

function loadBoard(staff) {
    staff.board_chairs.forEach(element => {
        document.getElementById("cochairs").innerHTML += `
        <div class="person-box">
            <img src="${element.headshot}" alt="Headshot of ${element.name}">
            <h3>${element.name}</h3>
            <p>${element.role}</p>
        </div>`
        
    });
    staff.business_partners.forEach(element => {
        document.getElementById("businesspartners").innerHTML += `
        <div class="person-box">
            <img src="${element.headshot}" alt="Headshot of ${element.name}">
            <h3>${element.name}</h3>
            <p>${element.role}</p>
        </div>`
        
    });
    
    




}

function loadILC(staff) {
    staff.c_suite.forEach(element => {
        document.getElementById("clevels").innerHTML += `
        <div class="person-box">
            <img src="${element.headshot}" alt="Headshot of ${element.name}">
            <h3>${element.name}</h3>
            <p>${element.role}</p>
        </div>`
        
    });
}
