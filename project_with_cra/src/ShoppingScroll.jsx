import React from "react";
import { useEffect, useState } from "react";
import "./Shop.css";

function Shop() {
  const [text, setText] = useState("");
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight &&
      !isLoading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
    setPage(1);
  };

  const fetchData = async () => {
    try {
      setIsLoading(true); // set is loading to true before fetching data
      const result = await fetch(
        `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?page=${page}&limit=5`
      );
      const items = await result.json();
      setArticles((prevArticles) =>
        page === 1 ? [...items] : [...prevArticles, ...items]
      );
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1 className="shop-title">Shopping Scroll App</h1>
      <label className="shop-label">Search for articles</label>
      <input
        className="shop-input"
        type="text"
        placeholder="Enter a keyword"
        onChange={handleChange}
      />
      <div className="shop-articles">
        {articles
          .filter((article) =>
            article.title.toLowerCase().includes(text.toLowerCase())
          )
          .map((article) => (
            <div className="article" key={article.id}>
              <h2 className="article-title">{article.title}</h2>
              <p>{article.price}</p>
              <p>{article.category}</p>
              <p>{article.description}</p>
              <img className="img" src={article.image} alt={article.alt} />
              <p>
                {article.rating.rate}, {article.rating.count}
              </p>
            </div>
          ))}
      </div>
      {isLoading && <h1>Data is Loading...</h1>}
    </>
  );
}

export default Shop;
