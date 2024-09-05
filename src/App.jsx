import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card";
import Nav from "./components/nav";
import Chip from "./components/chip";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);
  const [category, setcategory] = useState([]);
  const [chosen, setchosen] = useState("All");

  useEffect(() => {
    const url =  chosen == "All"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${chosen}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setloading(false);
      }).catch(()=>{
        setloading(false)
      })
  }, [chosen]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setcategory(data);
        setloading(false);

      })
  }, []);

  return (
    <>
      <Nav />

      <Chip OnClick={()=>{setchosen("All")}} isChosen={chosen === "All"}  title={"All"} />
      {category.map((category) => (
        <Chip
          isChosen={chosen === category.slug}
          title={category.name}
          key={category.slug}
          OnClick={() => {
            setchosen(category.slug);
          }}
        />
      ))}

      <div className="flex flex-wrap">
        {loading ? (
          <h1 className="font-bold">LOADING......</h1>
        ) : (
          products.map((data) => <Card value={data} />)
        )}
      </div>
    </>
  );
}

export default App;
