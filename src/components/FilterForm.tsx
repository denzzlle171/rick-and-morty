import React, { useState } from 'react';
import { useStoreCharacters } from '../store/store';

interface FilterProps {
  onClose: () => void;
}


export const FilterForm: React.FC<FilterProps> = ({ onClose }) => {
  const {
    setFilterName,
    setFilterStatus,
    setFilterGender,
    getCharacters,
    setCurrentPage,
  } = useStoreCharacters((state) => ({
    setFilterName: state.setFilterName,
    setFilterStatus: state.setFilterStatus,
    setFilterGender: state.setFilterGender,
    getCharacters: state.getCharacters,
    setCurrentPage: state.setCurrentPage,
  }));

  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFilterName(name);
    setFilterStatus(status);
    setFilterGender(gender);
    setCurrentPage(0);

    getCharacters();
    onClose();
  };
  return (
    <form onSubmit={handleSubmit} className='p-4 space-y-4'>
      <div>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-green-700'
        >
          Name:
        </label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='mt-1 p-2 block w-full border border-gray-300 rounded-sm shadow-sm  sm:text-sm text-green-700 '
          autoComplete='off'
        />
      </div>

      <div>
        <label
          htmlFor='status'
          className='block text-sm font-medium text-green-700'
        >
          Status:
        </label>
        <select
          id='status'
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className='mt-1 p-2 block w-full border border-gray-300 rounded-sm shadow-sm focus:ring-orange-500 focus:border--orange-500 sm:text-sm  text-green-700'
        >
          <option value='' disabled hidden></option>
          <option value='Dead'>Dead</option>
          <option value='unknown'>Unknown</option>
          <option value='Alive'>Alive</option>
        </select>
      </div>

      <div>
        <label
          htmlFor='gender'
          className='block text-sm font-medium text-green-700'
        >
          Gender:
        </label>
        <select
          id='gender'
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className='mt-1 p-2 block w-full border border-gray-300 rounded-sm shadow-sm  sm:text-sm text-green-700'
        >
          <option value='' disabled hidden></option>
          <option value='female'>Female</option>
          <option value='male'>Male</option>
          <option value='genderless'>Genderless</option>
          <option value='unknown'>Unknown</option>
        </select>
      </div>

      <div>
        <button
          type='submit'
className='mt-5 w-full py-2 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'          
        >
          filtrate
        </button>
      </div>
    </form>
  );
};
