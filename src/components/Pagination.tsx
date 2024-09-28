import { useStoreCharacters } from '../store/store';
import ReactPaginate from 'react-paginate';

interface PaginateEvent {
  selected: number;
}

export const Pagination: React.FC = () => {
  const { allPages, setCurrentPage, currentPage } = useStoreCharacters(
    (state) => ({
      allPages: state.allPages,
      setCurrentPage: state.setCurrentPage,
      currentPage: state.currentPage,
    }),
  );

  const handlePageClick = (event: PaginateEvent) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className='p-4'>
      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={allPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'flex justify-center space-x-1'}
        pageClassName={'page-item hidden sm:inline-block '}
        pageLinkClassName={
          'page-link px-3 py-1 border rounded hover:bg-orange-400 bg-green-500'
        }
        previousClassName={'page-item'}
        previousLinkClassName={
          'page-link px-3 py-1 border rounded hover:bg-orange-400 bg-green-500'
        }
        nextClassName={'page-item'}
        nextLinkClassName={
          'page-link px-3 py-1 border rounded hover:bg-orange-400 bg-green-500'
        }
        breakClassName={'page-item hidden sm:inline-block'}
        breakLinkClassName={'page-link px-3 py-1 border rounded bg-green-500 '}
        activeClassName={'active'}
        activeLinkClassName={'bg-green-600 text-white border-orange-400'}
        forcePage={currentPage}
      />
    </div>
  );
};
