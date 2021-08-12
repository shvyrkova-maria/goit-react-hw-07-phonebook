import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { DebounceInput } from 'react-debounce-input';
import { actions } from 'redux/contacts';
import { getFilterValue } from 'redux/contacts/contactsSelectors';

function Filter() {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  return (
    <DebounceInput
      id={`id-${nanoid(3)}`}
      type="text"
      name="name"
      value={filter}
      debounceTimeout={700}
      onChange={event => dispatch(actions.getFilterValue(event.target.value))}
      placeholder="Search"
    />
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;
