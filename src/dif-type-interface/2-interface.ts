interface WildAnimal {
  name: string;
}

interface Bear extends WildAnimal {
  honey: boolean;
}

declare const bear: Bear;
bear.name;
bear.honey;
