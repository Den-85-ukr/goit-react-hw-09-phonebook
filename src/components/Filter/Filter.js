import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import contactSelectors from '../../redux/contact/contact-selectors';
import contactActions from '../../redux/contact/contact-actions';

import styles from './Filter.module.scss';

class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;

    return (
      <label>
        <span className={styles.filter_title}>Find contacts by name</span>
        <input
          type="text"
          value={filter}
          id={this.filterId}
          onChange={onChange}
          placeholder="Enter name"
        />
      </label>
    );
  }
}

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

const mapStateToProps = state => ({
  filter: contactSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event =>
    dispatch(contactActions.changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);