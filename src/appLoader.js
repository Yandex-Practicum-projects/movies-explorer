import { checkToken } from './utils/MainApi';

export const appLoader = async () => {
  try {
    const user = await checkToken();
    return { user };
  } catch {
    return { user: null };
  }
};
