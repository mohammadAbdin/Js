let positions = [0, 1, 2];
const characters = document.querySelectorAll(".character");

const updateCarousel = () => {
  characters.forEach((character, index) => {
    const pos = positions[index];

    character.style.transform = `translateX(${(pos - 1) * 180}px) ${
      pos === 1 ? "scale(1.2)" : ""
    }`;

    if (pos === 1) {
      character.style.zIndex = 2;
      character.classList.add("character-center");
    } else {
      character.style.zIndex = 1;
      character.classList.remove("character-center");
    }
  });
};

characters.forEach((character, index) => {
  character.addEventListener("click", () => {
    const currentPos = positions[index];

    if (currentPos === 1) return;

    const rotations = currentPos === 0 ? 1 : 2;

    for (let i = 0; i < rotations; i++) {
      positions.push(positions.shift());
    }

    updateCarousel();
  });
});

updateCarousel();
