var typed = new Typed(".typewriter-text",
    {
        strings: [" ",
            "Software Developer",
            ".Net Developer",
            "Angular Developer",
            "Web Developer"
        ],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true

    }
)

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let section = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('.header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = window.offsetTop - 150;
//         let height = window.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

//             })
//         }
//     })
// }

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


function sendEmail() {
    Email.send(
        {
            Host: "smtp.mailtrap.io",
            Username: "<Mailtrap username>",
            Password: "<Mailtrap password>",
            To: 'recipient@example.com',
            From: "sender@example.com",
            Subject: "Test email",
            Body: "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
        }).then(message => alert(message));
}





window.onload = function () {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
};



//#region calculate Age
const dobInput = "06-04-2002";
if (dobInput) {
    const dobParts = dobInput.split("-");
    const dob = new Date(dobParts[2], dobParts[1] - 1, dobParts[0]); // YYYY, MM, DD (month is 0-based)

    const age = calculateAge(dob);
    document.getElementById('age').innerText = age;
    document.getElementById('dob').innerText = dobInput;
}

function calculateAge(dob) {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    // Adjust age if the current date is before the birthdate in the current year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}
//#endregion


const startCarrer = "01-01-2023";
if(startCarrer){
    const startParts = startCarrer.split("-");
    const start = new Date(startParts[2], startParts[1] - 1, startParts[0]); // YYYY, MM, DD (month is 0-based)

    const totalExp = totalExperience(start);
    console.log(totalExp);
    document.getElementById('totalExperience').innerText = '<'+totalExp+" Years>";
}

function totalExperience(start){
    const today = new Date();
    let years = today.getFullYear() - start.getFullYear();
    let months = today.getMonth() - start.getMonth();

    // console.log(years,".",months," this is my Experience");
    return years+'.'+months;

}









