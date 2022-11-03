// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PageHome from './Components/PageHome';

import { Routes, Route } from 'react-router-dom';

import About from './Components/About'
import ContactUs from './Components/ContactUs'
import Equipment from './Components/Equipment';
import DetailProduct from './Components/DetailProduct';
import Ingredients from './Components/Ingredients';
import DetailIngredients from './Components/DetailIngredients';
import Service from './Components/Service';
import Academy from './Components/Academy';
import DetailAcademy from './Components/DetailAcademy';
import Cafe from './Components/Cafe';
import Articles from './Components/Articles';
import DetailArticles from './Components/DetailArticles';
import { Factory } from './Components/Factory';
import { Fram } from './Components/Fram';




function App() {
  return (
    <>
    
      <Header />

      <Routes>
        <Route path='/' element={<PageHome />} />

        <Route path="/Corporate/About" element={<About />} />
        <Route path="/Corporate/Contact-us" element={<ContactUs />} />
        <Route path="/Products/Equipment" element={<Equipment />} />
        <Route path="/Products/Equipment/DetailProduct/:ProductId" element={<DetailProduct />} />
        <Route path="/Products/Ingredients" element={<Ingredients />} />
        <Route path="/Products/Ingredients/DetailIngredients/:IngredientsId" element={<DetailIngredients />} />
        <Route path="/Our_services/Fixing_service" element={<Service />} />
        <Route path="/Our_services/Academy" element={<Academy />} />
        <Route path="/Our_services/Academy/:AcademyId" element={<DetailAcademy />} />
        <Route path="/Our_services/Cafe" element={<Cafe />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Articles/:ArticlesId" element={<DetailArticles />} />
        <Route path="/Roasting_Factory" element={<Factory />} />
        <Route path="/Farm_Fresh_food" element={<Fram />} />
      </Routes>


      <Footer />
    </>

  );
}

export default App;
