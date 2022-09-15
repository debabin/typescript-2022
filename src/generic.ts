type WraperType<T> = {
  data: T;
};

interface WraperInterface<T> {
  data: T;
}

type RandomData = { name: string };
declare const wrapedData: WraperType<RandomData> | WraperInterface<RandomData>;

function getProperty<Type>(obj: Type, key: keyof Type) {
  return obj[key];
}

getProperty({ name: "Dima" }, "name");
getProperty({ title: "New video", des: "Best video about ts" }, "des");
