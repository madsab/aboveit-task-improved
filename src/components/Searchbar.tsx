import { Icon } from "@iconify/react";

interface ISearchbarProps {
  onChange: (value: string) => void;
}

const Searchbar: React.FC<ISearchbarProps> = ({ onChange }) => {
  const handleChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="searchbar">
      <Icon icon={"material-symbols:search"} color="white" />
      <input
        className="input"
        placeholder="Search here..."
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
