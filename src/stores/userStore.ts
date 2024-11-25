import { create } from "zustand";

type User = {
  firstName: string;
  lastName: string;
  email: string | undefined;
  phone: string | undefined;
  token: string | undefined;
  roles: string[];
  change_password: boolean;
};

type UserState = {
  user: User | undefined;

  setUser: (user: User) => void;
  setLogout: () => void;
};

export const useUserStore = create<UserState>()((set) => ({
  user: undefined,

  setLogout: () => set({ user: undefined }),

  setUser: (user: User) => set({ user }),
}));
