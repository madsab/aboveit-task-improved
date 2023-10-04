import { useEffect, useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import CatCard, { CatProps } from "./components/CatCard";

function App() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputFilter, setInputFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/breeds?limit=100&page=0&api_key=live_HQ2p2jHlCzLlVWK1G8ZjfFbqZWzBHewj6VhHfrDpdx5DLCVO58PCKRFrq8kYJLdZ"
        );
        const result = await response.json();
        console.log(result);
        setCats(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleInput = (value: string) => {
    setInputFilter(value.toLowerCase());
  };
  return (
    <div className="layout">
      <h1>Find your Dream Cat</h1>
      <Searchbar onChange={handleInput} />
      <main id="main" className="displayCats">
        <div className="moreInfo"></div>
        <>
          {loading
            ? "Loading..."
            : cats
                .filter((cat: CatProps) =>
                  cat.name.toLowerCase().includes(inputFilter)
                )
                .map((cat: CatProps, index) => {
                  return <CatCard key={index} {...cat} />;
                })}
        </>
      </main>
    </div>
  );
}

export default App;
