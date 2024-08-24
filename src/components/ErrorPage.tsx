import { Link } from 'react-router-dom';

export const ErrorPage: React.FC = () => {
  return (
    <div className='flex justify-center items-center flex-col text-white h-screen relative'>
      <Link
        to='/'
        className='absolute top-7 right-7 text-gray-700 text-2xl  hover:text-orange-500'
      >
        &#10005;
      </Link>

      <div className='text-center flex flex-col items-center justify-center'>
        <img
          src='../../assets/mr-asshole.png'
          alt='ms Asshole '
          className='h-1/2'
        />
        <p className='text-xl uppercase text-red-500 mt-3'>!!! oooh-weee !!!</p>
        <p className=' uppercase text-red-500 mt-1'>something went wrong.</p>
      </div>
    </div>
  );
};
