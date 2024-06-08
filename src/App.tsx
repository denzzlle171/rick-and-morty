import { Header } from './components/Header';
import { CharacterList } from './components/CharactersList';
import { CharacterDetails } from './components/CharacterDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <Header />
            <CharacterList />
          </>
        }
      />
      <Route path='/characters/:id' element={<CharacterDetails />} />
    </Routes>
  );
}

export default App;
