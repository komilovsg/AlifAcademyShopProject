import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout"; // Импортируем Layout
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Contacts from "./pages/Contacts";
import Terms from "./pages/Terms";
import { Routes as RoutePaths } from "./constants/routes"; // Импортируем ваши роуты

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={RoutePaths.Home} element={<Home name="Properties" />} />
          <Route
            path={RoutePaths.favorites}
            element={<Favorites name="Properties" />}
          />
          <Route path={RoutePaths.cart} element={<Cart age={25} />} />
          <Route path={RoutePaths.Contacts} element={<Contacts />} />
          <Route path={RoutePaths.Terms} element={<Terms />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
