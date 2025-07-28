  document.addEventListener("DOMContentLoaded", async () => {
    const baseUrls = {
      element: "https://raw.githubusercontent.com/iuhence/genshin/main/elements/",
      weapon: "https://raw.githubusercontent.com/iuhence/genshin/main/weapons/"
    };
  
    const elementMap = {
      anemo: "Wind",
      cryo: "Ice",
      dendro: "Grass",
      electro: "Electric",
      geo: "Rock",
      hydro: "Water",
      pyro: "Fire"
    };
  
    const weaponMap = {
      sword: "Sword",
      polearm: "Pole",
      claymore: "Claymore",
      catalyst: "Catalyst",
      bow: "Bow"
    };
  
    try {
      const response = await fetch("https://iuhence.github.io/genshin/characters.json");
      const characters = await response.json();
      const rawData = await response.json();
      const characters = Object.values(rawData).map(c => ({
        id: c.id,
        name: c.name,
        element: c.element,
        weapon: c.weaponType.replace('WEAPON_', '').split('_')[0],
        rarity: c.rank === 5 ? 'SSR' : 'SR',
        image: c.icon?.replace('UI_AvatarIcon_', '') || 'Unknown'
      }));
      
      const grid = document.getElementById("character-grid");
  
      Object.values(characters).forEach(c => {
  const rarity = c.rank === 5 ? 'SSR' : 'SR';
  const weaponRaw = c.weaponType.replace('WEAPON_', '').split('_')[0].toLowerCase(); // e.g., "sword"
  const weaponName = weaponRaw.charAt(0).toUpperCase() + weaponRaw.slice(1); // "Sword"
  const imageName = c.icon.replace('UI_AvatarIcon_', '');

  const container = document.createElement("div");
  container.className = "character-container";

  container.innerHTML = `
    <button class="character-button character-${rarity.toLowerCase()} character-triquetra">
      <img class="character-element" src="${baseUrls.element}UI_Buff_Element_${c.element}.png" alt="${c.element}" />
      <img class="character-weapon" src="${baseUrls.weapon}Skill_Normal_${weaponName}.png" alt="${weaponName}" />
      <img class="character" src="https://gi.yatta.moe/assets/UI/UI_AvatarIcon_${imageName}.png" alt="${c.name}" />
    </button>
    <div class="character-name">${c.name}</div>
  `;

  grid.appendChild(container);
});
      
    } catch (err) {
      console.error("❌ Failed to load characters.json:", err);
    }
  });

 document.addEventListener('DOMContentLoaded', () => {
  const baseUrl = "https://raw.githubusercontent.com/iuhence/genshin/main/elements/";

  document.querySelectorAll('.filter-btn').forEach(btn => {
    const element = btn.dataset.element;
    const img = document.createElement('img');
    img.src = `${baseUrl}UI_Buff_Element_${element}.png`;
    img.alt = element;
    img.width = 36;
    img.height = 36;
    btn.appendChild(img);
  });
});


