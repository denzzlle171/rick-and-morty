import { ICharacter } from '../types/ICharacter';
import { Link } from 'react-router-dom';

interface PropTypes {
  person: ICharacter;
}

export const CharacterCard: React.FC<PropTypes> = ({ person }) => {
  return (
    <Link to={`/characters/${person.id}`} className='bg-white rounded-lg overflow-hidden shadow-md w-60 transition-transform transition-shadow transform-gpu hover:shadow-lg hover:scale-105 duration-300 cursor-pointer'>
      <img
        src={person.image}
        alt='photo'
        className='w-full object-cover rounded-t-lg'
      />
      <div className='p-4'>
        <h2 className='text-xl font-bold text-gray-700 mb-2'>{person.name}</h2>
        <p className='text-gray-700 mb-2'>
          status:{' '}
          <span
            className={
              person.status === 'Alive'
                ? 'text-green-700 font-bold'
                : person.status === 'Dead'
                ? 'text-red-700 font-bold'
                : 'font-bold'
            }
          >
            {person.status}
          </span>
        </p>
        <p className='text-gray-700 mb-2'>{person.species}</p>
        <p className='text-gray-700 mb-2'>origin: {person.origin.name}</p>
      </div>
    </Link>
  );
};
