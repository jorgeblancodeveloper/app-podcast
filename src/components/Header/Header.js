import React from "react";
import { connect } from "react-redux";
import { Separator } from "../../elements/Separator/Separator";
import {updateFilteredList} from "../../services/redux/actions/";
import { FilterModule } from "../../components/FilterModule/FilterModule";
const Header = ({podcastList, updateFilteredList}) => {
  const handleFilteredList = (filteredData) => {
    console.log(filteredData);
    updateFilteredList(filteredData)
  };
  return (
    <div className="header">
      Podcaster
      <Separator />
      <div className="header__filter">
    { (podcastList?.feed?.entry.length) && <FilterModule list={podcastList?.feed?.entry} setFiltered={handleFilteredList} />}
    </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    podcastList: state.podcastList,
  };
};
export default connect(mapStateToProps, { updateFilteredList })(Header);
