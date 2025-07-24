<script>
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
          <img class="character" src="https://gi.yatta.moe/assets/UI/UI_AvatarIcon_${character.image}.png" alt="${character.name}" />
        </button>
        <div class="character-name">${character.name}</div>
      `;

      grid.appendChild(container);
    });
  } catch (err) {
    console.error("❌ Failed to load characters.json:", err);
  }
});
</script>
