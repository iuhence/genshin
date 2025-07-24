<script>
document.addEventListener("DOMContentLoaded", () => {
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

  // Fetch characters from JSON
  fetch("https://raw.githubusercontent.com/iuhence/genshin/main/characters.json")
    .then(res => res.json())
    .then(characters => {
      characters.forEach(character => {
        // Find matching container by data-id
        const container = document.querySelector(`.character-container[data-id="${character.id}"]`);
        if (!container) return;

        const elementImg = container.querySelector('.character-element');
        const weaponImg = container.querySelector('.character-weapon');

        const elementFile = elementMap[character.element.toLowerCase()];
        const weaponFile = weaponMap[character.weapon.toLowerCase()];

        if (elementFile && elementImg) {
          elementImg.src = `${baseUrls.element}UI_Buff_Element_${elementFile}.png`;
          elementImg.alt = character.element;
        }

        if (weaponFile && weaponImg) {
          weaponImg.src = `${baseUrls.weapon}Skill_Normal_${weaponFile}.png`;
          weaponImg.alt = character.weapon;
        }
      });
    });
});
</script>
