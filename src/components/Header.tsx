import React, { useState } from 'react';
import { Modal } from './Modal'
import { FilterForm } from './FilterForm';
import { SortForm } from './SortForm';

export const Header: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('filter');
  

    const openFilterModal = () => {
      setModalContent('filter');
      setIsModalOpen(true);
    };

    const openSortModal = () => {
      setModalContent('sort');
      setIsModalOpen(true);
    };


  return (
    <div>
      <div className='bg-green-500 w-full h-82px px-5 flex justify-between '>
        <img
          src='../../assets/logo.png'
          alt='logo'
          className='w-24 h-auto'
        ></img>
        <nav className='mt-5'>
          <button
            onClick={openSortModal}
            className='bg-white text-green-500 hover:bg-orange-500 hover:text-white  py-2 px-4 rounded-md mr-2'
          >
            sort
          </button>

          <button
            className='bg-white text-green-500 hover:bg-orange-500 hover:text-white py-2 px-4 rounded-md mr-2'
            onClick={openFilterModal}
          >
            filter
          </button>
        </nav>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          {modalContent === 'filter' && (
            <div>
              <h2 className='text-green-700'>Filters</h2>
              <FilterForm onClose={() => setIsModalOpen(false)} />
            </div>
          )}
          {modalContent === 'sort' && (
            <div>
              <h2 className='text-green-700'>Sort</h2>
              <SortForm onClose={() => setIsModalOpen(false)} />
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};
