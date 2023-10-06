import { useEffect, useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import CatCard, { CatProps } from "./components/CatCard";
import MoreInfo from "./components/MoreInfo";
import { Icon } from "@iconify/react/dist/iconify.js";

function App() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputFilter, setInputFilter] = useState("");
  const [noSearch, setNoSearch] = useState("");
  const [moreInfo, setMoreInfo] = useState(null);
  const [displayInfo, setDisplayInfo] = useState("noShow");

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

  const handleInput = (value: string) => {
    setInputFilter(value.toLowerCase());
    cats.filter((cat: CatProps) => cat.name.toLowerCase().includes(inputFilter))
      .length === 0 && setNoSearch("No Options");
  };

  const showMoreInfo = (event: EventTarget) => {
    if (event instanceof HTMLImageElement) {
      const chosenCat = event.alt;
      displayInfo == "noShow"
        ? setDisplayInfo("Show")
        : setDisplayInfo("noShow");
      setMoreInfo(
        cats.filter((cat: CatProps) => cat.name.includes(chosenCat))[0]
      );
    }
  };
  return (
    <div className="layout">
      <h1>Find your Dream Cat</h1>
      <Searchbar onChange={handleInput} />
      <main
        id="main"
        className="displayCats"
        onClick={(e) => showMoreInfo(e.target)}
      >
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
          {noSearch}
        </>
        {displayInfo && (
          <div className={displayInfo}>
            <Icon
              icon={"ph:x"}
              width={40}
              onClick={() => setDisplayInfo("noShow")}
              style={{ cursor: "pointer", padding: "3px 3px" }}
            />
            <MoreInfo cat={moreInfo} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
