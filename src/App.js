import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Header from './Page/Shared/Header/Header';
import Footer from './Page/Shared/Footer/Footer';
import Blogs from './Page/Blogs/Blogs';
import Login from './Page/Login/Login';
import Services from './Page/Home/Services/Services';
import Notfound from './Page/Shared/NotFound/Notfound';
import Regester from './Page/Login/Resgester/Regester';
import CheckOut from './Page/CheckOut/CheckOut';
import ServiceDetails from './Page/Home/Services/ServiceDitails/ServiceDetails';
import RequerAuth from './Page/Login/RequerAuth/RequerAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/service' element={<Services></Services>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/regester' element={<Regester></Regester>}></Route>
        <Route path='/checkout' element={<RequerAuth>
          <CheckOut></CheckOut>
        </RequerAuth>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
