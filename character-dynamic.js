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

  // Loop through character containers
  document.querySelectorAll(".character-container").forEach((container, index) => {
    const character = characterData[index]; // assumes same order

    const elementImg = container.querySelector(".character-element");
    const weaponImg = container.querySelector(".character-weapon");

    if (elementImg && character.element) {
      elementImg.src = `${baseUrls.element}UI_Buff_Element_${elementMap[character.element]}.png`;
      elementImg.alt = character.element;
    }

    if (weaponImg && character.weapon) {
      weaponImg.src = `${baseUrls.weapon}Skill_Normal_${weaponMap[character.weapon]}.png`;
      weaponImg.alt = character.weapon;
    }
  });
});
