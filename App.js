import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js"
import AddItem from "./components/AddItem.js";
function App() {
  const initialProductList = [
    {
      Price: 84000,
      name: "iPhone 15 pro",
      quantity: 0,
    },
    {
      Price: 34000,
      name: "iQoo Neo 6",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(initialProductList);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList]; // Copy the productList array
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++; // Increment the quantity of the item at the index
    newTotalAmount += newProductList[index].Price
    setTotalAmount(newTotalAmount)
    setProductList(newProductList); // Update the state with the new array
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList]; // Copy the productList array
    let newTotalAmount =totalAmount;
    if (newProductList[index].quantity > 0 )
      {
        newProductList[index].quantity--
        newTotalAmount-= newProductList[index].Price
      } 
      setTotalAmount(newTotalAmount)
      setProductList(newProductList); // Update the state with the new arrayv
  };

  const resetQuantity=()=>{
    let newProductList = [...productList]; // Copy the productList array
    newProductList.map((products)=>{
      products.quantity=0
    })
    setProductList(newProductList);
    setTotalAmount(0);
  }

  const removeItem=(index)=>{
    let newProductList = [...productList]; // Copy the productList array
    let newTotalAmount =totalAmount;
    newTotalAmount-=newProductList[index].quantity*newProductList[index].Price;
    newProductList.splice(index,1);
    setProductList(newProductList);
    setTotalAmount=(newTotalAmount);
  }

  const addItem=(name,Price)=>{
    let newProductList = [...productList]; // Copy the productList array
    newProductList.push({
      Price:Price,
      name:name,
      quantity:0
    });
    setProductList(newProductList);
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem}/>
        <ProductList productList={productList} 
        incrementQuantity={incrementQuantity} 
        decrementQuantity={decrementQuantity}
        removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import Navbar from './components/navbar.js/index.js';
// import ProductList from './components/ProductList.js';

// function App() {
//   const productList = [
//     {
//       Price: 84000,
//       name: 'iPhone 15 pro',
//       quantity: 0,
//     },
//     {
//       Price: 34000,
//       name: 'iQoo Neo 7',
//       quantity: 0,
//     },
//   ];

//   console.log('App productList:', productList);

//   return (
//     <>
//       <Navbar />
//       <main className="container">
//         <ProductList productList={productList} />
//         {/* props is (product={product}) */}
//         {/* <Footer/> */}
//       </main>
//     </>
//   );
// }

// export default App;
