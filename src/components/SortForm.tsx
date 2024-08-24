
import { useStoreCharacters } from '../store/store';

interface SortProps {
  onClose: () => void;
}

export const SortForm: React.FC<SortProps> = ({ onClose }) => {
  const { getCharacters, setSortField, setSortOrder, sortField, sortOrder } =
    useStoreCharacters((state) => ({
      getCharacters: state.getCharacters,
      setSortField: state.setSortField,
      setSortOrder: state.setSortOrder,
      sortField: state.sortField,
      sortOrder: state.sortOrder,
    }));

  const handleSort = () => {
    getCharacters();
    onClose();
  };

  return (
    <div className='container mx-auto p-4' style={{ width: '300px' }}>
      <div className='flex flex-col gap-5'>
        <select
          className='mt-2 p-2 block w-full border border-gray-300 rounded-sm shadow-sm sm:text-sm text-green-700'
          value={sortField || 'none'}
          onChange={(e) => {
            setSortField(e.target.value);
          }}
        >
          <option value='none'>No Sorting</option>
          <option value='name'>Name</option>
          <option value='status'>Status</option>
          <option value='created'>Date Created</option>
        </select>

        <div
          className={`transition-height duration-300 ease-in-out overflow-hidden flex justify-center items-center  ${
            sortField === 'none' ? 'h-0' : 'h-10'
          }`}
        >
          {sortField !== 'none' && (
            <div className='inline-flex items-center'>
              <input
                type='radio'
                id='ascending'
                name='sortOrder'
                value='ascending'
                checked={sortOrder === true}
                onChange={() => setSortOrder(true)}
                className='mr-2'
              />
              <label htmlFor='ascending' className='mr-4 text-green-700'>
                Ascending
              </label>

              <input
                type='radio'
                id='descending'
                name='sortOrder'
                value='descending'
                checked={sortOrder === false}
                onChange={() => setSortOrder(false)}
                className='mr-2'
              />
              <label htmlFor='descending' className='text-green-700'>
                Descending
              </label>
            </div>
          )}
        </div>

        <button
          onClick={() => handleSort()}
          className='w-full py-2 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
        >
          Apply sort
        </button>
      </div>
    </div>
  );
};