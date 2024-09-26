import "./App.css";
import Nav from "./Navigation/Nav";
import Product from "./Products/Product";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";

//databaSE
import Data from "./Data/Data";
import Card from "./Components/Card";
function App() {
  //category
  const [selectCategory, setSelectCategory] = useState(null);

  //input Filter
  const [query, setQuery] = useState("");

  const handleinputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteritems = Data.filter(
    (data) =>
      data.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );
  // ==========RadioFilter==============
  const handelChange = (event) => {
    setSelectCategory(event.target.value);
  };

  // button filter
  const handelClick = (event) => {
    setSelectCategory(event.target.value);
  };

  function filteredData(Data, selected, query) {
    let filteredProducts = Data;
    //filtering inpu items
    if (query) {
      filteredProducts = filteritems;
    }
    // selectedfilter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice == selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({
        img,
        title,
        star,
        reviews,
        prevPrice,
        newPrice,
        company,
        color,
        category,
      }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          company={company}
          color={color}
          category={category}
        />
      )
    );
  }
  const result = filteredData(Data, selectCategory, query);

  return (
    <>
      <Sidebar handelChange={handelChange} />
      <Nav query={query} handleinputChange={handleinputChange} />
      <Recommended handelClick={handelClick} />
      <Product result={result} />
    </>
  );
}

export default App;
