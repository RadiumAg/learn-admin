import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type History = { name: string; path: string };

type HistoryState = {
  history: History[];
  setHistory: (value: History) => void;
  deleteHistory: (value: History) => void;
};

const useHistoryStore = create(
  persist<HistoryState>(
    (set) => ({
      history: [],
      setHistory: (history) => {
        set((pre) => {
          const { history: oldHistory } = pre;
          const newHistory = [...oldHistory];
          if (newHistory.some((_) => history.path === _.path))
            return { history: newHistory };

          newHistory.push(history);
          return { history: newHistory };
        });
      },
      deleteHistory: (history) => {
        set((pre) => {
          const { history: oldHistory } = pre;
          const newHistory = [...oldHistory].filter(
            (_) => _.path !== history.path
          );

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
