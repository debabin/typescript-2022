type Animal = "🐶" | "🐋" | "🦄" | "🐳" | "🐊";
const unicorn: Animal = "🦄";

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

declare const smallPet: Bird | Fish;
smallPet.layEggs;

if ("swim" in smallPet) {
  smallPet.swim;
}
