class Group {
  name: string;
  readonly id: number = Math.floor(Math.random() * 100000);

  constructor(name: string) {
    this.name = name;
  }
}

const group = new Group("SIBERIA CAN CODE");
group.name;
