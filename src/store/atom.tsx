import { atom } from "recoil";

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
  default: false,
});
