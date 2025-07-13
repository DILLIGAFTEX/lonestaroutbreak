document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('faction-modal');
  const chosenFactionSpan = document.getElementById('chosen-faction');
  const confirmBtn = document.getElementById('confirm-btn');
  const cancelBtn = document.getElementById('cancel-btn');
  const modalImage = document.getElementById('modal-faction-img');
  const modalPerksContainer = document.getElementById('modal-perks-container');

  let selectedFaction = '';

  const factionsData = {
    Medic: {
      image: 'https://placehold.co/150x150/e0e0e0/b30000?text=Medic',
      perks: [
        "Can revive downed allies faster.",
        "Crafts advanced medical supplies."
      ]
    },
    Engineer: {
      image: 'https://placehold.co/150x150/e0e0e0/b30000?text=Engineer',
      perks: [
        "Can repair vehicles and structures.",
        "Crafts defensive fortifications."
      ]
    },
    Recon: {
      image: 'https://placehold.co/150x150/e0e0e0/b30000?text=Recon',
      perks: [
        "Can spot and mark enemies for the team.",
        "Moves faster and more quietly."
      ]
    },
    Scavenger: {
      image: 'https://placehold.co/150x150/e0e0e0/b30000?text=Scavenger',
      perks: [
        "Finds higher quality loot.",
        "Increased inventory capacity."
      ]
    },
    Hunter: {
      image: 'https://placehold.co/150x150/e0e0e0/b30000?text=Hunter',
      perks: [
        "Deals bonus damage to infected.",
        "Can track recent enemy movements."
      ]
    }
  };

  document.querySelectorAll('.faction-card button').forEach(button => {
    button.addEventListener('click', () => {
      selectedFaction = button.dataset.faction;
      const factionData = factionsData[selectedFaction];

      // Populate modal
      chosenFactionSpan.textContent = selectedFaction;
      modalImage.src = factionData.image;
      modalImage.alt = `${selectedFaction} Emblem`;

      // Build perks list
      let perksHtml = '<h3>Perks:</h3><ul>';
      factionData.perks.forEach(perk => {
        perksHtml += `<li>${perk}</li>`;
      });
      perksHtml += '</ul>';
      modalPerksContainer.innerHTML = perksHtml;

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
