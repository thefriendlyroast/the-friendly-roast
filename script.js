// ============================================================
// the friendly roast — small helpers
// ============================================================

// 1) Always show the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// 2) Underline the page you are on in the navigation menu
var currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach(function (link) {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
