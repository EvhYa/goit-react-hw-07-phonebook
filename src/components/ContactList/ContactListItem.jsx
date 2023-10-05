import { useDispatch } from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';
import { deleteContact } from 'redux/operations';
import { useState } from 'react';

export const ContactListItem = ({ id, name, number }) => {
  const [removing, setRemoving] = useState(false);

  const dispatch = useDispatch();

  return (
    <li>
      {name} tel: {number}
      <button
        type="button"
        onClick={() => {
          setRemoving(true);
          dispatch(deleteContact(id));
        }}
      >
        {removing ? <BeatLoader color="purple" size={10} /> : 'Delete'}
      </button>
    </li>
  );
};
