type AttachFile<FileType extends string = "json"> = {
  type: FileType;
};

declare const json: AttachFile;
json.type;

type JsFileType = "js";
declare const js: AttachFile<JsFileType>;
js.type;
