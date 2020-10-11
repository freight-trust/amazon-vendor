import "./ProductList.css";
import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/amahack-api.service";
import ProductCard from "../product-card/ProductCard";

export default function ProductList({ onLogOut }) {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    getProducts()
      .then((products) => setProductList(products))
      .catch((e) => {
        if (e.response.status === 401) {
          onLogOut();
        } else {
          setError(true);
        }
      });
  }, []);

  if (error) {
    return <div>There was an error sending the request</div>;
  }

  if (productList.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="product-list">
        {/* {console.log(productList)} */}
        {productList.map((pro) => (
          <ProductCard
            name={pro.name}
            price={pro.price}
            image={pro.image}
            user={pro.user}
            id={pro.id}
          />
        ))}
      </div>
    );
  }
}

// const generateRandomColor = () => Math.floor(Math.random() * 16777215).toString(16)
// export default function ProductList() {

//     const [color, setColor] = useState('black')
//     const [redirect, setRedirect] = useState(false)

//     useEffect(() => {
//         const interval = setInterval(() => setColor(`#${generateRandomColor()}`), 1000)
//         const timeout = setTimeout(() => setRedirect(true), 5000)

//         return () => {
//             clearInterval(interval)
//             clearInterval(timeout)
//         }
//     }, [])

//     if (redirect) {
//         return <Redirect to='/login' />
//     }

//     return (
//         <p style={{color: color}}>Andrés</p>
//     )
// }

// export default function EffectsExample(props) {

//     const [state, setState] = useState()

//     useEffect(() => {})
//     useEffect(() => {}, [])
//     useEffect(() => {}, [props.prop1, state])

//     return (
//         <div></div>
//     )
// }
