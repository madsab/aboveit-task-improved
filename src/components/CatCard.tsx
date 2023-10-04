import React, { useState } from "react";
import "../App.css";

export interface CatProps {
  weight: {
    imperial: string;
    metric: string;
  };
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
}

const CatCard: React.FC<CatProps> = ({ ...props }) => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    visible ? setVisible(false) : setVisible(true);
  };
  return (
    <div className="catCard" onClick={handleClick}>
      <p>{props.name}</p>
      <img src={props.cfa_url} alt={props.name} />
      {visible ? (
        <div className="info">
          <p>{props.description}</p>
          <p>{props.life_span}</p>
          <p>{props.short_legs}</p>
          <p>{props.social_needs}</p>
          <p>{props.stranger_friendly}</p>
          <p>{props.origin}</p>
          <p>{props.life_span}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CatCard;
