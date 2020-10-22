import React from "react";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";

const Search = () => {
  return (
    <div>
        <h5>What would you like to learn today?</h5>
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <InputGroupText>🔍</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default Search;
