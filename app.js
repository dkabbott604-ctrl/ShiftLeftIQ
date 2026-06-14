const PASSWORD = 'shiftleft';

document.getElementById('pw-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const val = document.getElementById('pw-input').value.trim().toLowerCase();
  if (val === PASSWORD) {
    const screen = document.getElementById('password-screen');
    screen.style.transition = 'opacity 0.6s ease';
    screen.style.opacity = '0';
    setTimeout(() => {
      screen.classList.add('hidden');
      document.getElementById('main-site').classList.remove('hidden');
    }, 600);
  } else {
    const err = document.getElementById('pw-error');
    err.classList.remove('hidden');
    const input = document.getElementById('pw-input');
    input.value = '';
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 500);
  }
});

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.classList.add('hidden');
  });
  const target = document.getElementById('page-' + id);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('active');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
}

function handleForm(e) {
  e.preventDefault();
  document.getElementById('form-success').classList.remove('hidden');
  e.target.reset();
}
