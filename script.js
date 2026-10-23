// ============================================================
// the friendly roast — small helpers
// ============================================================

// Underline the page you are on in the navigation menu
var currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach(function (link) {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
