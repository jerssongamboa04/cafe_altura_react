import '../src/app.css'
import CestaPage from "./Pages/CestaPage";
import HomePage from "./Pages/HomePage";
import StorePage from "./Pages/StorePage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Context from "./Context/Context"
import Header from './Components/Header/Header';



function App() {


  return (
    <div className="App">
      <Context>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="Cesta" element={<CestaPage />} />
            <Route path="Store" element={<StorePage />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;

