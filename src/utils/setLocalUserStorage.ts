import { userType } from "../types/userType";

export const setLocalUserStorage = (user: userType | undefined) => {
  localStorage.setItem("user", JSON.stringify(user));
};
