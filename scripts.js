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


let isDarkMode = false;

// Function to toggle between dark and light modes
function toggleTheme() {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    // Add 'darkmode' class and remove 'lightmode' class
    document.body.classList.add('darkmode');
    document.body.classList.remove('lightmode');
  } else {
    // Add 'lightmode' class and remove 'darkmode' class
    document.body.classList.add('lightmode');
    document.body.classList.remove('darkmode');
  }
}

// Event listener to trigger the toggleTheme function
document.getElementById('themeToggleButton').addEventListener('click', toggleTheme);


document.addEventListener('DOMContentLoaded', () => {


  const sb = ScrollReveal({
    duration: 1000,
    delay: 500,
    mobile: true,
    origin: 'bottom',
    distance: '60px'
  });

  sb.reveal('.header', { origin: 'top' });
  sb.reveal('.home .home-content, .skill-container .skills-box:nth-child(1), .service-container .services-box:nth-child(1), .contact-container .contact-section:nth-child(1), .timeline-items .timeline-item:nth-child(odd), .about-circle', {origin: 'left'});
  sb.reveal('.home .home-img, .skill-container .skills-box:nth-child(2), .service-container .services-box:nth-child(2), .contact-container .contact-section:nth-child(2), .timeline-items .timeline-item:nth-child(even)', {origin: 'right'});
  sb.reveal('.about .about-content, .about .about-img, .service-container .services-box:nth-child(3), .footer', { origin: 'bottom' });
  sb.reveal('.skills, .resumes, .resume-container, .services, .contact, .footer .social', { origin: 'bottom', delay: 600 });
  sb.reveal('.heading, h3, .footer .list', { origin: 'bottom', delay: 500 });
  sb.reveal('.home-circle-2', { origin: 'top', delay: 600 });
  sb.reveal('.home-circle-1', { origin: 'bottom', delay: 500 });
  sb.reveal('.skills-section .skill:nth-child(even), .personal-details ul li:nth-child(even)', { origin: 'right', delay: 500 });
  sb.reveal('.skills-section .skill:nth-child(odd), .personal-details ul li:nth-child(odd)', { origin: 'left', delay: 500 });


  // sb.reveal('', { origin: 'bottom', delay: 500 });

  
  // sb.reveal('', { origin: 'bottom', delay: 500 });
  // sb.reveal('.section_header_container .main_head', { origin: 'bottom', delay: 600 });
  // sb.reveal('.section_header_container .sub_head', { origin: 'bottom', delay: 500 });









    let wr = document.querySelector('.wrapper');
    let bg = document.querySelector('.background');
    let bg2 = document.querySelector('.background-2');
    let sun = document.querySelector('.sun');
    let circles = document.querySelectorAll('.sun-circle');
    let spots = document.querySelectorAll('.sun-spot');
  
    let flag = false;
    if (wr) {  // Ensure wr is not null
      wr.addEventListener('click', () => {
        if (flag == false) {
          bg.classList.add('background_active');
          wr.classList.add('wrapper_active');
          sun.classList.add('sun_active');
          circles[0].classList.add('sun-circle_active');
          circles[1].classList.add('sun-circle-two_active');
          circles[2].classList.add('sun-circle-three_active');
          bg2.classList.add('background-2_active');
          spots.forEach((item) => { item.classList.add('sun-spot_active') })
          flag = true;
        }
      });
    } else {
      if (bg) {
        bg.classList.remove('background_active');
      }
      wr ? wr.classList.remove('wrapper_active') : '';
      sun ? sun.classList.remove('sun_active') : '';
      circles[0] ? circles[0].classList.remove('sun-circle_active') : '';
      circles[1] ? circles[1].classList.remove('sun-circle-two_active') : '';
      circles[2] ? circles[2].classList.remove('sun-circle-three_active') : '';
      bg2 ? bg2.classList.remove('background-2_active') : '';
      // wr.classList.remove('wrapper_active');
      // sun.classList.remove('sun_active');
      // circles[0].classList.remove('sun-circle_active');
      // circles[1].classList.remove('sun-circle-two_active');
      // circles[2].classList.remove('sun-circle-three_active');
      // bg2.classList.remove('background-2_active');
      spots.forEach((item) => { item.classList.remove('sun-spot_active') })
      flag = false;
    }
  });









