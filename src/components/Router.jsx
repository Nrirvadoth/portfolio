import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Admin from '../pages/admin';
import Error404 from '../pages/404';
import '../style/global.scss';

function Router() {
  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
