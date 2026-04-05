// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Form validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  // Name validation
  if(name.value.trim() === '') {
    document.getElementById('nameError').style.display = 'block';
    valid = false;
  } else {
    document.getElementById('nameError').style.display = 'none';
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!email.value.match(emailPattern)) {
    document.getElementById('emailError').style.display = 'block';
    valid = false;
  } else {
    document.getElementById('emailError').style.display = 'none';
  }

  // Message validation
  if(message.value.trim() === '') {
    document.getElementById('messageError').style.display = 'block';
    valid = false;
  } else {
    document.getElementById('messageError').style.display = 'none';
  }

  if(valid) {
    alert('Thank you! Your message has been sent.');
    form.reset();
  }
});
