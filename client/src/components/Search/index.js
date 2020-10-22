import React from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

const Search = () => {
    return(
        <div>
                <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <InputGroupText>search</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
        </div>
    )
};

export default Search;