const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

document.querySelector('#year').textContent = new Date().getFullYear();

const form = document.querySelector('#joinForm');
const note = document.querySelector('#formNote');
form.addEventListener('submit', e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const applications = JSON.parse(localStorage.getItem('onepieceApplications') || '[]');
  applications.push({...data, submittedAt: new Date().toISOString()});
  localStorage.setItem('onepieceApplications', JSON.stringify(applications));
  note.textContent = `Application received, ${data.name}! The ONEPIECE team will contact you.`;
  form.reset();
});
