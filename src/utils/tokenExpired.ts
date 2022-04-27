export const tokenExpired = (token: string) => {
  try {
    const now = new Date();
    const { exp } = JSON.parse(window.atob(token.split(".")[1]));
    const expiresIn = parseInt(exp, 10) * 1000;

    return expiresIn < now.getTime();
  } catch (error) {
    return false;
  }
};
