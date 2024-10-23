import { useState, useEffect, useContext } from "react";
import Card from "../components/card";
import Chip from "../components/chip";
import { Badge, Pagination } from "antd";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartcontext";

function Products() {
  const cartitems = useContext(CartContext);
  console.log(cartitems);
  
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);
  const [category, setcategory] = useState([]);
  const [chosen, setchosen] = useState("All");
  const [limit, setlimit] = useState(20);
  const [total, settotal] = useState(0);
  const [skip, setskip] = useState(0);

  useEffect(() => {
    const url =
      chosen == "All"
        ? `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        : `https://dummyjson.com/products/category/${chosen}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        settotal(data.total);
        setloading(false);
      })
      .catch(() => {
        setloading(false);
      });
  }, [chosen, limit, skip]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setcategory(data);
        setloading(false);
      });
  }, []);

  return (
    <>
      <Chip
        OnClick={() => {
          setchosen("All");
        }}
        isChosen={chosen === "All"}
        title={"All"}
      />
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

      <div className="flex justify-evenly py-3">
        <h1 className="text-3xl ">products</h1>
        <Link to={"/carts"}>
          <Badge count={10}>
            <ShoppingCartOutlined style={{ fontSize: 40 }} />
          </Badge>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <h1 className="font-bold">LOADING......</h1>
        ) : (
          products.map((data) => <Card value={data} key={data.id} />)
        )}
      </div>
      <div className="my-5">
        <Pagination
          align="center"
          onChange={(num) => {
            setskip((num - 1) * limit);
          }}
          onShowSizeChange={(num, pageSize) => {
            setlimit(pageSize);
          }}
          defaultCurrent={1}
          total={total}
          pageSize={limit}
        />
      </div>
    </>
  );
}

export default Products;
