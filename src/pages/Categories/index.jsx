import React from "react";

import AppBarDoubleLinks from "../../components/Categories/AppBarDoubleLinks";
import Text2 from "../../components/Categories/Text2";
import SearchInput from "../../components/Categories/SearchInput";
import GridProduct from "../../components/Categories/GridProduct";
import OulinedButton from "../../components/Categories/OulinedButton";

const Categories = () => {
  return (
    <div>
      <AppBarDoubleLinks />
      <Text2 />
      <SearchInput />
      <GridProduct />
      <OulinedButton />
    </div>
  );
};

export default Categories;
