import { useUserStore } from '~/stores/user';

export function useAuth() {
  const userStore = useUserStore();

  const user = userStore.User;

  return { user };
}