import { Header } from './components/Header';
import {ErrorPage}from './components/ErrorPage'
import { CharacterList } from './components/CharactersList';
import { CharacterDetails } from './components/CharacterDetails';
import { Route, Routes, } from 'react-router-dom';
import { Pagination } from './components/Pagination';
// import { useStoreCharacters } from './store/store';

function App() {

  // const { errors } =
  //   useStoreCharacters((state) => ({
  //     errors: state.errors,
  //   }));

  
  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <Header />
            <CharacterList />
            <Pagination />
          </>
        }
      />
      <Route path='/characters/:id' element={<CharacterDetails />} />
      <Route path='/error' element={<ErrorPage/>} />
    </Routes>
  );
}

export default App;
