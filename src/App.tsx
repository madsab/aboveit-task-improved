import { useEffect, useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import CatCard from "./components/CatCard";

function App() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/breeds?limit=100&page=0&api_key=live_HQ2p2jHlCzLlVWK1G8ZjfFbqZWzBHewj6VhHfrDpdx5DLCVO58PCKRFrq8kYJLdZ"
        );
        const result = await response.json();

        setCats(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="layout">
      <h1>Find your Dream Cat</h1>
      <Searchbar />
      <main className="displayCats">
        <>
          {loading
            ? "Loading..."
            : cats.map((cat, index) => {
                return <CatCard key={index} {...cat} />;
              })}
        </>
      </main>
    </div>
  );
}

export default App;
