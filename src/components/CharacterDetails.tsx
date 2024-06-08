import React, { useEffect } from 'react';
import { useStoreCharacters } from '../store/store';
import { useParams, Link } from 'react-router-dom';

export const CharacterDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { getCharacters, characters } = useStoreCharacters(
    (state) => ({
      characters: state.characters,
      getCharacters: state.getCharacters,
    }),
  );

  useEffect(() => {
    getCharacters();
  }, [id, getCharacters]);

  const person = characters.find((person) => person.id === +id);

  const date = new Date(person?.created);
  const formattedDate = date.toLocaleDateString();

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
          src={person?.image}
          alt='photo'
          className='cursor-pointer object-cover rounded-full m-auto hover:rounded-lg transition-all duration-700 ease-in-out'
        />
        <div className='p-4 flex flex-col space-y-3 items-center '>
          <h2 className='text-xl font-bold text-gray-700  hover:text-orange-500'>
            {person?.name}
          </h2>
          <p className='text-gray-700  hover:text-orange-500'>
            status:{' '}
            <span
              className={
                person?.status === 'Alive'
                  ? 'text-green-700 font-bold'
                  : person?.status === 'Dead'
                  ? 'text-red-700 font-bold'
                  : 'font-bold'
              }
            >
              {person?.status}
            </span>
          </p>
          <p className='text-gray-700   hover:text-orange-500'>
            species: {person?.species}
          </p>
          <p className='text-gray-700  hover:text-orange-500'>
            origin: {person?.origin.name}
          </p>
          <p className='text-gray-700  hover:text-orange-500'>
            sex: {person?.gender}
          </p>
          <p className='text-gray-700  hover:text-orange-500'>
            location: {person?.location.name}
          </p>
          <p className='text-gray-700  hover:text-orange-500'>
            created: {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
};
