export const getLocalUserStorage = () => {
  const localUser = localStorage.getItem("user");
  if (localUser) {
    return JSON.parse(localUser);
  }
  return null;
};
