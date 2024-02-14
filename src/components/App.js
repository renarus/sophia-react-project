import Home from './Home';
import Footer from './Footer';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HairandSkin from './HairandSkin';
import Fragrances from './Fragrances';
import Contact from './Contact'
import About from './About';
import Cart from './Cart'
import ShopContextProvider from '../context/shop-context';
import HairandSkinDetails from '../details/HairandSkinDetails';
import LogIn from './LogIn';
import FragrancesDetails from '../details/FragrancesDetails';
import HairandSkinData from '../datas/HairandSkinData';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/hair' element={<HairandSkin />} />
            <Route path='/hair/:id' element={<HairandSkinDetails />} />
            <Route path='/frag' element={<Fragrances />} />
            <Route path='/frag/:id' element={<FragrancesDetails />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LogIn />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
