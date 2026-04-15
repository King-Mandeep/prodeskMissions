// Theme toggle
const themeBtn = document.getElementById('theme-toggle');
const themeBtnMob = document.getElementById('theme-toggle-mob');

function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeBtn.textContent = isDark ? '☀️' : '🌙';
  if (themeBtnMob) themeBtnMob.textContent = isDark ? '☀️' : '🌙';
}

themeBtn.addEventListener('click', toggleTheme);
if (themeBtnMob) themeBtnMob.addEventListener('click', toggleTheme);

// Hamburger toggle
const ham = document.getElementById('menu-toggle');
const mob = document.getElementById('mobile-menu');

ham.addEventListener('click', () => {
  ham.classList.toggle('open');
  mob.classList.toggle('open');
});

// Active link switching — desktop nav
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.mobile-menu a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');

    // Sync mobile menu active state
    const href = this.getAttribute('href');
    document.querySelectorAll('.mobile-menu a').forEach(l => {
      if (l.getAttribute('href') === href) l.classList.add('active');
    });
  });
});

// Active link switching — mobile menu
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.mobile-menu a').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');

    // Sync desktop nav active state
    const href = this.getAttribute('href');
    document.querySelectorAll('.nav-links a').forEach(l => {
      if (l.getAttribute('href') === href) l.classList.add('active');
    });

    // Close mobile menu after selecting
    ham.classList.remove('open');
    mob.classList.remove('open');
  });
});