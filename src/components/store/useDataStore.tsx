import { create } from "zustand";

type MenuOption = {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

export const useDataStore = create<MenuOption>((set) => ({
  isMenuOpen: false,
  openMenu: () => set({ isMenuOpen: true }),
  closeMenu: () => set({ isMenuOpen: false }),
}));
