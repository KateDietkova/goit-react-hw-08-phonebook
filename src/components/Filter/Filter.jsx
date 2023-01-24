import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/itemsSlice/filterSlice.js';
import { selectFilterValue } from 'redux/contacts/contacts-selectors.js';
import {
  FloatingLabelStyled,
  FilterInput,
  FilterWrapper,
  InputGroupStyled,
} from './Filter.styled.js';

import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch } from 'react-icons/bs';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);
  return (
    <FilterWrapper>
      <InputGroupStyled>
        <InputGroup.Text>
          <BsSearch size="20" />
        </InputGroup.Text>
        <FloatingLabelStyled
          controlId="floatingInput"
          label="Find contact by name"
        >
          <FilterInput
            type="text"
            placeholder="Enter email"
            value={filterValue}
            onChange={e => dispatch(filterContacts(e.currentTarget.value))}
          />
        </FloatingLabelStyled>
      </InputGroupStyled>
    </FilterWrapper>
  );
};
