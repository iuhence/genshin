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
    const response = await fetch("https://raw.githubusercontent.com/iuhence/genshin/main/characters.json");
    const characters = await response.json();

    const grid = document.getElementById("character-grid");

    characters.forEach(character => {
      const container = document.createElement("div");
      container.className = "character-container";

      container.innerHTML = `
        <button class="character-button character-${character.rarity.toLowerCase()} character-triquetra">
          <img class="character-element" src="${baseUrls.element}UI_Buff_Element_${elementMap[character.element]}.png" alt="${character.element}" />
          <img class="character-weapon" src="${baseUrls.weapon}Skill_Normal_${weaponMap[character.weapon]}.png" alt="${character.weapon}" />
          <img class="character" src="${character.image}" alt="${character.name}" />
        </button>
        <div class="character-name">${character.name}</div>
      `;

      grid.appendChild(container);
    });
  } catch (err) {
    console.error("Failed to load characters:", err);
  }
});
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
    // Fetch character data from your JSON file
    const response = await fetch("https://raw.githubusercontent.com/iuhence/genshin/main/characters.json");
    const characterData = await response.json();

    // Match each character container to data
    document.querySelectorAll(".character-container").forEach((container, index) => {
      const character = characterData[index]; // relies on same order

      const elementImg = container.querySelector(".character-element");
      const weaponImg = container.querySelector(".character-weapon");

      if (elementImg && character?.element) {
        elementImg.src = `${baseUrls.element}UI_Buff_Element_${elementMap[character.element]}.png`;
        elementImg.alt = character.element;
      }

      if (weaponImg && character?.weapon) {
        weaponImg.src = `${baseUrls.weapon}Skill_Normal_${weaponMap[character.weapon]}.png`;
        weaponImg.alt = character.weapon;
      }

      const nameDiv = container.querySelector(".character-name");
      if (nameDiv && character?.name) {
        nameDiv.textContent = character.name;
      }
    });
  } catch (err) {
    console.error("Failed to load character data:", err);
  }
});
