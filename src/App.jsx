import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import PizzaDetails from "./pages/details/PizzaDetails";
import Layout from "./layout/Layout";
import SavedDishes from "./pages/saved-dishes/SavedDishes";
import FilteredDishes from "./pages/filtered-dishes/FilteredDishes";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dishes/:id" element={<PizzaDetails />} />
          <Route path="/saved-dishes" element={<SavedDishes />} />
          <Route path="/meal-type/:mealType" element={<FilteredDishes />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
