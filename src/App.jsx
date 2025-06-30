import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Layout from "./layout/Layout";
import SavedDishes from "./pages/saved-dishes/SavedDishes";
import FilteredDishes from "./pages/filtered-dishes/FilteredDishes";
import DishDetails from "./pages/details/DishDetails";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dishes/:id" element={<DishDetails />} />
          <Route path="/saved-dishes" element={<SavedDishes />} />
          <Route path="/meal-type/:mealType" element={<FilteredDishes />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
