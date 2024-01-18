import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Admin from '../pages/admin';
import Error404 from '../pages/404';
import '../style/global.scss';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="https://nrirvadoth.github.io/portfolio/" element={<Home />} />
        <Route path="https://nrirvadoth.github.io/portfolio/admin" element={<Admin />} />
        <Route path="https://nrirvadoth.github.io/portfolio/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
