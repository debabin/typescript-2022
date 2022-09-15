function getKey<Key extends string>(key: Key) {
  return key;
}

getKey("a");
getKey(123);
getKey([]);

getKey<{ name: string }>("error");
getKey<"first" | "second">("first");
