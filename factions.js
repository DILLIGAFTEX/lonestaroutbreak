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
      image: 'https://r2.fivemanage.com/IISUtLV7264jjzzZ57p0E/medical.png',
      perks: [
        "Can revive downed allies faster.",
        "Crafts advanced medical supplies."
      ]
    },
    Engineer: {
      image: 'https://r2.fivemanage.com/IISUtLV7264jjzzZ57p0E/engineer.png',
      perks: [
        "Can repair vehicles and structures.",
        "Crafts defensive fortifications."
      ]
    },
    Recon: {
      image: 'https://r2.fivemanage.com/IISUtLV7264jjzzZ57p0E/recon.png',
      perks: [
        "Can spot and mark enemies for the team.",
        "Moves faster and more quietly."
      ]
    },
    Scavenger: {
      image: 'https://r2.fivemanage.com/IISUtLV7264jjzzZ57p0E/scavenger.png',
      perks: [
        "Finds higher quality loot.",
        "Increased inventory capacity."
      ]
    },
    Hunter: {
      image: 'https://r2.fivemanage.com/IISUtLV7264jjzzZ57p0E/hunter.png',
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
    alert(`Welcome to the ${selectedFaction} faction, Head on over to the server find the fox icon at the trader pick a faction and survive the apocalypse!`);
    modal.style.display = 'none';
  });
});
