type WaterAnimal = {
  name: string;
};

type Shark = WaterAnimal & {
  danger: boolean;
};

declare const shark: Shark;
shark.name;
shark.danger;
