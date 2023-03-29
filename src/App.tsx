import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import AddProductPage from './pages/AddProductPage';
import HomePage from './pages/HomePage';
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<HomePage/>}></Route>
        <Route index path='/create' element={<AddProductPage/>}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
