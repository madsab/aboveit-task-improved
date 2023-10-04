import { Icon } from "@iconify/react";
import { CatProps } from "./CatCard";

interface ISearchbarProps {
  list?: CatProps[];
}

const Searchbar: React.FC<ISearchbarProps> = (props) => {
  props;
  return (
    <div className="searchbar">
      <Icon icon={"material-symbols:search"} color="white" />
      <input className="input" placeholder="Search here..." />
    </div>
  );
};

export default Searchbar;
