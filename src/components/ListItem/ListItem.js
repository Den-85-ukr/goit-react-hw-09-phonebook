import PropTypes from 'prop-types';

import styles from './ListItem.module.scss';

const ListItem = ({ name, number, onDeleteItem, id }) => {
  const handleDelete = () => {
    onDeleteItem(id);
  };
  return (
    <li>
      <span className={styles.contact}>
        {name}: {number}
      </span>
      <button onClick={handleDelete} type="button">
        Delete
      </button>
    </li>
  );
};


ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

export default ListItem;