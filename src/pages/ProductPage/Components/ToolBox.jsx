import { Select } from "@/components/Select/Select";
import { SORT_OPTIONS } from "@/constants/general";
import React from "react";

const ToolBox = ({ limit, total, onSortChange, activeSelect }) => {
  const onSelectChange = (e) => {
    onSortChange?.(e.target.value);
  };
  return (
    <div className="toolbox">
      <div className="toolbox-left">
        <div className="toolbox-info">
          {" "}
          Showing{" "}
          <span>
            {limit} of {total}
          </span>{" "}
          Products{" "}
        </div>
      </div>
      <div className="toolbox-right">
        <Select
          label="Sort by:"
          className="toolbox-sort"
          value={activeSelect}
          defaultValue={SORT_OPTIONS.popularity.value}
          options={[
            SORT_OPTIONS.popularity,
            SORT_OPTIONS.pricelow,
            SORT_OPTIONS.pricehigh,
            SORT_OPTIONS.newest,
            SORT_OPTIONS.rating,
          ]}
          onChange={onSelectChange}
        />
      </div>
    </div>
  );
};

export default ToolBox;
