document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('faction-modal');
  const chosenFactionSpan = document.getElementById('chosen-faction');
  const confirmBtn = document.getElementById('confirm-btn');
  const cancelBtn = document.getElementById('cancel-btn');

  let selectedFaction = '';

  document.querySelectorAll('.faction-card button').forEach(button => {
    button.addEventListener('click', () => {
      selectedFaction = button.dataset.faction;
      chosenFactionSpan.textContent = selectedFaction;
      modal.style.display = 'flex';
    });
  });

  cancelBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  confirmBtn.addEventListener('click', () => {
    // Here you could add logic to save the choice, e.g., to localStorage
    // or send it to a server. For now, we'll just show an alert.
    alert(`Welcome to the ${selectedFaction} faction, Head on over to the server and experience the apocalypse!`);
    modal.style.display = 'none';
  });
});
