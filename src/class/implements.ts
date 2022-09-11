interface Phone {
  name: string;
  apps: { name: string }[];

  addApp: (name: string) => { name: string }[];
  call: (number: number) => void;
}

class Iphone implements Phone {
  name: string;
  apps: { name: string }[];

  constructor(name: string) {
    this.apps = [];
    this.name = name;
  }

  addApp = (name: string) => {
    this.apps = [...this.apps, { name }];
    return this.apps;
  };

  call = (number: number) => {
    console.log("... do some action for call", number);
  };
}
