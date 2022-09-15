type AttachFile<Type extends string = "json"> = {
  type: Type;
};

declare const json: AttachFile;
json.type;

type JsFileType = "js";
declare const js: AttachFile<JsFileType>;
js.type;
