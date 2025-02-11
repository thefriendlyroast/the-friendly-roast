document.addEventListener('DOMContentLoaded', function() {
  // Toggle Admin Panel Visibility
  const adminToggle = document.getElementById('admin-toggle');
  const adminPanel = document.getElementById('admin-panel');
  
  adminToggle.addEventListener('click', function() {
    if (adminPanel.style.display === 'none') {
      adminPanel.style.display = 'block';
    } else {
      adminPanel.style.display = 'none';
    }
  });
  
  // Save and Load the "About" Text Using localStorage
  const saveAboutButton = document.getElementById('save-about');
  const aboutTextArea = document.getElementById('about-text');
  const aboutSection = document.querySelector('#about p');
  
  // Load saved text (if it exists)
  if (localStorage.getItem('aboutText')) {
    const savedText = localStorage.getItem('aboutText');
    aboutSection.textContent = savedText;
    aboutTextArea.value = savedText;
  }
  
  // Save the updated text on button click
  saveAboutButton.addEventListener('click', function() {
    const newText = aboutTextArea.value.trim();
    localStorage.setItem('aboutText', newText);
    aboutSection.textContent = newText;
    alert('About text updated!');
  });
});
