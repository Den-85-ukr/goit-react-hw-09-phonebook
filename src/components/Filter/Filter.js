import { useDispatch, useSelector } from 'react-redux';

import contactSelectors from '../../redux/contact/contact-selectors';
import contactActions from '../../redux/contact/contact-actions';

import styles from './Filter.module.scss';

export default function Filter() {
  const filter = useSelector(contactSelectors.getFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    dispatch(contactActions.changeFilter(event.target.value));
  };

  return (
      <label>
        <span className={styles.filter_title}>Find contacts by name</span>
        <input
          type="text"
          value={filter}          
          onChange={onChange}
          placeholder="Enter name"
        />
      </label>
    );
};