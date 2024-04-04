// import React from "react";
// import { useEffect, useState } from "react";

// import "../styles/shop.css";

// function Shop() {
//   const fetchData = async () => {
//     try {
//       const result = await fetch(
//         `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?page=${page}&limit=5`
//       );
//       const artnews = await result.json();

//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <>
//       <h1 className="shop-title">Shopping Scroll App</h1>
//       <label className="shop-label">Search for articles</label>
//       <input className="shop-input" type="text" placeholder="Enter a keyword" />
//       <div className="shop-articles">
//         <div className="article">
//           <h2 className="article-title"></h2>
//           <p></p>
//           <p></p>
//           <p></p>
//           <a>
//             <img className="img" />
//           </a>
//           <p>, </p>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Shop;
