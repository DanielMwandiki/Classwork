// Get all the message panes
const panes = document.querySelectorAll('.pane');

// Loop through each pane and add a close button
for (let i = 0; i < panes.length; i++) {
  const pane = panes[i];
  const closeButton = document.createElement('button');
  closeButton.classList.add('remove-button');
  closeButton.innerHTML = '[x]';
  closeButton.addEventListener('click', function() {
    pane.style.display = 'none';
  });
  pane.insertBefore(closeButton, pane.firstChild);
}