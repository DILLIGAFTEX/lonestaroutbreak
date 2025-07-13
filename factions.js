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
      image: 'https://cdn.discordapp.com/attachments/1244574412376899614/1393923834146455685/medical.png?ex=6874f03b&is=68739ebb&hm=110c3e0040734400cb2dc684ccf6f5cf41e9156d5a8f280ebe7edc784196965e&',
      perks: [
        "Can revive downed allies faster.",
        "Crafts advanced medical supplies."
      ]
    },
    Engineer: {
      image: 'https://cdn.discordapp.com/attachments/1244574412376899614/1393923804853571715/medical.png?ex=6874f034&is=68739eb4&hm=4308b2ede80633223c064c7b16c229827da22b94d323cb70954a1b0b5428d442&',
      perks: [
        "Can repair vehicles and structures.",
        "Crafts defensive fortifications."
      ]
    },
    Recon: {
      image: 'https://cdn.discordapp.com/attachments/1244574412376899614/1393923843633971200/recon.png?ex=6874f03e&is=68739ebe&hm=c6841dda060c42ab37afdbb7a19b4e740ffcafc228b4cee0240d4e5c48af7dba&',
      perks: [
        "Can spot and mark enemies for the team.",
        "Moves faster and more quietly."
      ]
    },
    Scavenger: {
      image: 'https://cdn.discordapp.com/attachments/1244574412376899614/1393923853675266058/scavenger.png?ex=6874f040&is=68739ec0&hm=1239aa3210cd4ef9b315d955c4886f6f411bf89ffd0c42a9602e143903e5db06&',
      perks: [
        "Finds higher quality loot.",
        "Increased inventory capacity."
      ]
    },
    Hunter: {
      image: 'https://cdn.discordapp.com/attachments/1244574412376899614/1393923815884722277/hunter.png?ex=6874f037&is=68739eb7&hm=871f4d91360c31d1b4427db4637520894ea2686cc5d44f57319dc2c6038acf6e&',
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
