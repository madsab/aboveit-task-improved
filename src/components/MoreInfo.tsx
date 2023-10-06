import React from "react";
import { CatProps } from "./CatCard";

interface IMoreInfoProps {
  cat: CatProps | null;
}

const MoreInfo: React.FC<IMoreInfoProps> = ({ cat }) => {
  return (
    <div className="moreInfo">
      <h2>{cat?.name}</h2>
      <img src={cat?.image?.url} alt={cat?.name} width={200} />
      <section className="description">
        <p>{cat?.description}</p>
        <div className="score">
          <p>Experimental: {cat?.experimental}</p>
          <p>Hairless: {cat?.hairless}</p>
          <p>Hypoallergenic: {cat?.hypoallergenic}</p>
          <p>Natural {cat?.natural}</p>
          <p>Rare: {cat?.rare}</p>
          <p>Short legs: {cat?.short_legs}</p>
          <p>Social needs: {cat?.social_needs}</p>
          <p>Stranger Friendly: {cat?.stranger_friendly}</p>
          <p>Supressed tail: {cat?.suppressed_tail}</p>
          <p>Temperament: {cat?.temperament}</p>
        </div>
        <div>
          <h2>Links for more info</h2>
          <p>
            Vetstreet:{" "}
            <a target="_blank" href={cat?.vetstreet_url}>
              {cat?.vetstreet_url}
            </a>
          </p>
          <p>
            Vca hospital:
            <a target="_blank" href={cat?.vcahospitals_url}>
              {cat?.vcahospitals_url}
            </a>
          </p>
          <p>
            Wikipedia:{" "}
            <a target="_blank" href={cat?.wikipedia_url}>
              {cat?.wikipedia_url}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default MoreInfo;
