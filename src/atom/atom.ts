import { atom } from "recoil";

export const savePostAtom = atom({
  key: "savePost",
  default: "",
});

export const saveTitleAtom = atom({
  key: "saveTitle",
  default: "",
});
