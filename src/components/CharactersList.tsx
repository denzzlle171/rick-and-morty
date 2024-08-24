import { CharacterCard } from './CharacterCard';
import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useStoreCharacters } from '../store/store';
import { Loader } from './Loader';




export const CharacterList: React.FC = () => {
  const { getCharacters, loading, characters, currentPage, errors } =
    useStoreCharacters((state) => ({
      getCharacters: state.getCharacters,
      loading: state.loading,
      characters: state.characters,
      currentPage: state.currentPage,
      errors: state.errors,
    }));
  
   const navigate = useNavigate();

  useEffect(() => {
    getCharacters();
  }, [currentPage]);

    useEffect(() => {
      if (errors) {
        navigate('/error');
      }
    }, [errors, navigate]);



  return (
    <div className='flex justify-center items-center min-h-screen'>
      {loading ? (
        <Loader />
      ) : (
        <div className='m-auto flex flex-col'>
          <div className='p-5 grid justify-center  content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 '>
            {characters.map((person) => (
              <CharacterCard key={person.id} person={person} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
