import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import "./Home.css";

const Home = ({ data, setData, cart, setCart }) => {
  const nav = useNavigate();
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setData(data);
      console.log(data);
    }
    getData();
  }, []);

  function addCart(items) {
    setCart([...cart, items]);
  }
  function details() {
    nav("/details");
  }

  return (
    <div className="Home">
      <Nav cart={cart} />
      <div className="items">
        {data &&
          data.map((items) => {
            return (
              <div>
                <div onClick={details} className="Itemcard">
                  <img src={items.image} alt="" />
                  <p>{items.price}</p>
                  <p>{items.title}</p>
                </div>
                <button onClick={() => addCart(items)}>Add Cart</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
