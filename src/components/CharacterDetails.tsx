import React, { useEffect } from 'react';
import { useStoreCharacters } from '../store/store';
import { useParams, Link } from 'react-router-dom';

export const CharacterDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { getCharacters, character } = useStoreCharacters(
    (state) => ({
      getCharacters: state.getCharacters,
      character: state.character,
    }),
  );

  useEffect(() => {

    getCharacters(id);         // 🍕🍕
  }, [id, getCharacters]);
 


  const formattedDate = character?.created
    ? new Date(character.created).toLocaleDateString()
    : 'Unknown';

  return (
    <div className='flex justify-center items-center flex-col text-white h-screen'>
      <Link
        to='/'
        className='absolute top-7 right-7 text-gray-700 text-2xl  hover:text-orange-500'
      >
        &#10005;
      </Link>

      <div>
        <img
          src={character?.image}
          alt='photo'
          className='cursor-pointer object-cover rounded-full m-auto hover:rounded-lg transition-all duration-700 ease-in-out'
        />
        <div className='p-4 flex flex-col space-y-3 items-center '>
          <h2 className='text-xl font-bold text-gray-700  hover:text-orange-500'>
            {character?.name}
          </h2>
          <p className='text-gray-700  hover:text-orange-500'>
            status:{' '}
            <span
              className={
                character?.status === 'Alive'
                  ? 'text-green-700 font-bold'
                  : character?.status === 'Dead'
                  ? 'text-red-700 font-bold'
                  : 'font-bold'
              }
            >
              {character?.status}
            </span>
          </p>
          <p className='text-gray-700   hover:text-orange-500'>
            species: {character?.species}
          </p>
          <p className='text-gray-700  hover:text-orange-500'>
            origin: {character?.origin.name}
          </p>
          <p className='text-gray-700  hover:text-orange-500'>
            sex: {character?.gender}
          </p>
          <p className='text-gray-700  hover:text-orange-500'>
            location: {character?.location.name}
          </p>
          <p className='text-gray-700  hover:text-orange-500'>
            created: {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
};
