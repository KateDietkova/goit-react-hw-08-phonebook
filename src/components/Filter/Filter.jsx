import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/itemsSlice/filterSlice.js';
import { selectFilterValue } from 'redux/contacts/contacts-selectors.js';
import { FilterStyled, LabelFilter } from './Filter.styled.js';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);
  return (
    <>
      <LabelFilter>
        Find contacts by name
        <FilterStyled
          type="text"
          value={filterValue}
          onChange={e => dispatch(filterContacts(e.currentTarget.value))}
        />
      </LabelFilter>
    </>
  );
};
