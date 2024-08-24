import { create } from 'zustand';
import{ICharacter}from '../types/ICharacter'

interface IStateCharacter {
  characters: ICharacter[];
  loading: boolean;
  errors: string | null;
  allPages: number;
  currentPage: number;

  filterName: string;
  setFilterName: (name: string) => void;

  filterStatus: string;
  setFilterStatus: (status: string) => void;

  filterGender: string;
  setFilterGender: (gender: string) => void;

  sortField: string 
  sortOrder: boolean | null;
  
  setSortField: (field: string ) => void;
  setSortOrder: (order: boolean | null) => void;

  setCurrentPage: (page: number) => void;

  getCharacters: () => Promise<void>;
}

export const useStoreCharacters = create<IStateCharacter>()((set, get) => ({
  errors:  null,
  loading: true,
  characters: [],
  allPages: 0,
  currentPage: 0,

  filterName: '',
  setFilterName: (name: string) => {
    set({ filterName: name });
  },

  filterStatus: '',
  setFilterStatus: (status: string) => {
    set({ filterStatus: status });
  },

  filterGender: '',
  setFilterGender: (gender: string) => {
    set({ filterGender: gender });
  },

  sortField: 'none',
  sortOrder: true,
  setSortField: (field: string ) => {
    set({ sortField: field });
  },
  setSortOrder: (order: boolean | null) => {
    set({ sortOrder: order });
  },

  setCurrentPage: (page: number) => {
    set({ currentPage: page });
  },

  getCharacters: async () => {
    try {
      const { currentPage, filterName, filterStatus, filterGender } = get();
      const queryParams = new URLSearchParams({
        page: (currentPage + 1).toString(),
        ...(filterName && { name: filterName }),
        ...(filterStatus && { status: filterStatus }),
        ...(filterGender && { gender: filterGender }),
      });

      const response = await fetch(
        `https://rickandmortyapi.com/api/character?${queryParams}`,
      );

      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      let sortedCharacters = data.results;
      const { sortField, sortOrder } = get();

      if (sortField && sortOrder !== null) {
        sortedCharacters = sortedCharacters.sort(
          (a: ICharacter, b: ICharacter) => {
            if (a[sortField] < b[sortField]) return sortOrder ? -1 : 1;
            if (a[sortField] > b[sortField]) return sortOrder ? 1 : -1;
            return 0;
          },
        );
      }

      set({ allPages: data.info.pages });

      set({ characters: sortedCharacters });
    } catch (error) {
      if (error instanceof Error) {
        set({ errors: error.message });
      } else {
        set({ errors: 'Unknown error' });
      }
    } finally {
      set({ loading: false });
    }
  },
}));
