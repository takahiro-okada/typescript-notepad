import { atom } from "recoil";
import { Memos } from "../types/api/memos";
export const userEmailState = atom<string>({
  key: "userEmail",
  default: "",
});
export const userPasswordState = atom<string>({
  key: "userPassword",
  default: "",
});
export const isAuthenticatedState = atom<boolean>({
  key: "authenticated",
  default: true,
});
export const idState = atom<string>({
  key: "id",
  default: "",
});
export const titleState = atom<string>({
  key: "title",
  default: "",
});
export const categoryState = atom<string>({
  key: "category",
  default: "",
});
export const descriptionState = atom<string>({
  key: "description",
  default: "",
});
export const dateState = atom<string>({
  key: "date",
  default: "",
});
export const editMemosState = atom<Memos>({
  key: "editMemos",
  default: {
    id: 1,
    title: "string",
    category: "string",
    date: "string",
    description: "string",
    // eslint-disable-next-line camelcase
    mark_div: 0,
  },
});
