import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { register } from '../redux/auth';

import styles from './pages.module.scss';

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onRegister(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={styles.Page}>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <div className={styles.form__group}>
            <label className={styles.form__label}>
              Name
              <input
                autoComplete="off"
                className={styles.form__input}
                name="name"
                type="text"
                value={name}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div className={styles.form__group}>
            <label className={styles.form__label}>
              Email
              <input
                autoComplete="off"
                className={styles.form__input}
                name="email"
                type="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className={styles.form__group}>
            <label className={styles.form__label}>
              Password
              <input
                className={styles.form__input}
                name="password"
                type="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <button className={styles.form__btn} type="submit">
            Register me!
          </button>
        </form>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);