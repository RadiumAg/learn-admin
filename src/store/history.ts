import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type History = { name: string; path: string; active: boolean };

type HistoryState = {
  history: { name: string; path: string; active: boolean }[];
  setHistory: (value: History) => void;
};

const useHistoryStore = create(
  persist<HistoryState>(
    (set, get) => ({
      history: [],
      setHistory: (history) => {
        set((pre) => {
          const { history: oldHistory } = pre;
          const newHistory = [...oldHistory];
          newHistory.push(history);
          return { history: newHistory };
        });
      },
    }),
    {
      name: 'history',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useHistoryStore;
