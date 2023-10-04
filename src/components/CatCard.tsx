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
  hypoallergenic: number;
  reference_image_id: string;
  image?: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
}

const CatCard: React.FC<CatProps> = ({ ...props }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="catCard">
      <div className="catCardFront">
        <h3>{props.name}</h3>
        <p>Origin: {props.origin}</p>
        <p>Stranger Friendly: {props.stranger_friendly}</p>
        <p>Life Span: {props.life_span}</p>
        <p>Click for more info</p>
      </div>
      <img className="img" src={props.image?.url} alt={props.name} />
    </div>
  );
};

export default CatCard;
