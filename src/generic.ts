type WraperType<T> = {
  data: T;
};

interface WraperInterface<T> {
  data: T;
}

function getProperty<Type>(obj: Type, key: keyof Type) {
  return obj[key];
}

getProperty({ name: "Dima" }, "name");
getProperty({ title: "New video", des: "Best video about ts" }, "des");
