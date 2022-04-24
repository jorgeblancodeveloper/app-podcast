import React from "react";
import { Input } from "../../elements/Input/Input";
import { Separator } from "../../elements/Separator/Separator";
export const FilterModule = ({ list, setFiltered }) => {
  const [filteredListLength, setFilteredListLength] = React.useState(0);
  React.useEffect(() => {
    setFiltered(list);
    setFilteredListLength(list.length);
  }, []);
  const handleChange = (ev) => {
    const filtered = list.filter((el) =>
      el.title.label.toLowerCase().includes(ev.target.value.toLowerCase())
    );
    setFilteredListLength(filtered.length);
    setFiltered(filtered);
  };
  return (
    <div className="filter-module">
        <Separator/>
      <div className="filter-module__count">{filteredListLength}</div>
      <Input handleChange={handleChange} placeholder="Filter podcasts..." />
    </div>
  );
};
