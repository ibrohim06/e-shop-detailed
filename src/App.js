import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./page/Header";
import Main from "./page/Main";
import Single from "./page/Single";
import Categ from "./page/Category";
import ProductCateg from "./page/ProductCateg";
import ShowNav from "./components/showNav";
import Back from "./components/back";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      <Header />
      <ShowNav pathname={pathname} />
      <Back />
      {/* <Categ /> */}
      {/* <Main /> */}

      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Categ />} />
        </Route>
        <Route path="/single/:id" element={<Single />} />
        {/* <Route path={`${pathname}:id`} element={<Single />} />
        <Route
          path={`/product/category/electronics/:id`}
          element={<Single />}
        />  */}
        <Route path="/product/category/:name" element={<ProductCateg />} />
      </Routes>
    </div>
  );
}

export default App;
