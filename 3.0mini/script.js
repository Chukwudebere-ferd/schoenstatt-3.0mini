const greetingSpan = document.getElementById('greeting');
const nicknameSpan = document.getElementById('nickname');
const nicknameInput = document.getElementById('nicknameInput');
const header = document.getElementById('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

// Time-based greeting
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  else if (hour < 18) return "Good afternoon";
  else return "Good evening";
}

// Show header and body with nickname
function showHeader(name) {
  greetingSpan.textContent = getGreeting();
  nicknameSpan.textContent = name;
  header.style.display = 'block';
  nicknameInput.style.display = 'none';
  main.style.display = 'block';
  footer.style.display = 'block';
}

// Allow editing the nickname
function editNickname() {
  nicknameInput.value = localStorage.getItem('nickname') || '';
  nicknameSpan.style.display = 'none';
  nicknameInput.style.display = 'inline';
  nicknameInput.focus();
}

// Save nickname if valid and show full layout
function saveNickname(nickname) {
  if (nickname.length > 0 && nickname.length <= 12) {
    localStorage.setItem('nickname', nickname);
    nicknameSpan.textContent = nickname;
    nicknameSpan.style.display = 'inline';
    nicknameInput.style.display = 'none';
    main.style.display = 'block';
    footer.style.display = 'block';
  }
}

// On first load
const savedName = localStorage.getItem('nickname');
if (savedName) {
  showHeader(savedName);
} else {
  nicknameInput.style.display = 'inline';
  greetingSpan.textContent = getGreeting();
  header.style.display = 'block';
  main.style.display = 'none';
  footer.style.display = 'none';
}

// Handle Enter key
nicknameInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter' && nicknameInput.value.trim() !== '') {
    saveNickname(nicknameInput.value.trim());
  }
});

// Click to edit nickname
nicknameSpan.addEventListener('click', editNickname);




const navLinks = document.querySelectorAll('.nav-item a');
const sections = document.querySelectorAll('section');

// Handle nav click
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove 'active' from all links
    navLinks.forEach(l => l.classList.remove('active'));

    // Add 'active' to clicked link
    link.classList.add('active');

    // Get section name from data-label
    const target = link.getAttribute('data-label');

    // Hide all sections
    sections.forEach(section => {
      section.style.display = 'none';
    });

    // Show the matching section
    const targetSection = document.getElementById(target);
    if (targetSection) {
      targetSection.style.display = 'block';
    }

    // Save active section to localStorage
    localStorage.setItem('activeSection', target);
  });
});


// for clandar getting the id's


  getFormattedDate();

   function getFormattedDate(){

    const dateVar = new Date();
    const day = dateVar.getDate();
    const weekday = dateVar.toLocaleString('default', { weekday: 'long' });
    const monthName = dateVar.toLocaleString('default', { month: 'long' });

    // for sec
 
    function updateTime() {
    const dateVar = new Date();
    document.getElementById('time').innerHTML = dateVar.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  // Call it every 1000ms (1 second)
  setInterval(updateTime, 1000);
  updateTime(); // Initial call to show time immediately



    const date = document.getElementById('date').innerHTML = day;
    const month = document.getElementById('month').innerHTML = monthName;
    const Day = document.getElementById('Day').innerHTML = weekday;
  }

  // for color of the day/ saint of the day /season;

const color =  document.getElementById('ColorOfTheDay');
const saint = document.getElementById('saintOfTheDay');
const season = document.getElementById('season');

fetch('http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today')
.then(res => res.json())
.then(data => {
  console.log(data);
  color.innerHTML ="color of the day: " + 
 data. celebrations[0].colour;

//  saint of the day
  saint.innerHTML = data.celebrations[0].title;
  // season
  season.innerHTML ="season of the Day : " + data.season;

  
});

// roasry 
const roasry = document.getElementById('rosary');

fetch('https://the-rosary-api.vercel.app/v1/monday')
.then(res => res.json())
.then(data => {
  console.log(data);
  roasry.innerHTML = "rosary of the day: " + data[0]. group_by;
});
