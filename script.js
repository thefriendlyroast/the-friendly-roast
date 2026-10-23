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

// Hide the "How much?" question when the request isn't about coffee
var coffeeSelect = document.getElementById('coffee');
var sizeRow = document.getElementById('size-row');

function updateSizeRow() {
  if (coffeeSelect && sizeRow) {
    sizeRow.style.display = (coffeeSelect.value === 'not-coffee') ? 'none' : '';
  }
}

if (coffeeSelect) {
  coffeeSelect.addEventListener('change', updateSizeRow);
  updateSizeRow();
}

// Hide the "How much?" question when the request isn't about coffee
var coffeeSelect = document.getElementById('coffee');
var sizeRow = document.getElementById('size-row');

function updateSizeRow() {
  if (coffeeSelect && sizeRow) {
    sizeRow.style.display = (coffeeSelect.value === 'not-coffee') ? 'none' : '';
  }
}

if (coffeeSelect) {
  coffeeSelect.addEventListener('change', updateSizeRow);
  updateSizeRow();
}
