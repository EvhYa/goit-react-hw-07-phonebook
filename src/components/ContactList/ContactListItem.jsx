import { useDispatch, useSelector } from 'react-redux';
import { getIsRemoveProcess } from 'redux/selector';
import BeatLoader from 'react-spinners/BeatLoader';
import { deleteContact } from 'redux/operations';

export const ContactListItem = ({ id, name, number }) => {
  const removing = useSelector(getIsRemoveProcess);

  const dispatch = useDispatch();

  return (
    <li>
      {name} tel: {number}
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        {removing ? <BeatLoader color="purple" size={10} /> : 'Delete'}
      </button>
    </li>
  );
};
