import { create } from "zustand";

// Define the type for the store state
interface BearStore {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

// Create the Zustand store with the proper types
const useBearStore = create<BearStore>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useBearStore;
