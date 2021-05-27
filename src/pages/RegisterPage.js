import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { register } from '../redux/auth';

import styles from './pages.module.scss';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        throw new Error('ERROR');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.Page}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label>
            Name
            <input
              autoComplete="off"              
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Email
            <input
              autoComplete="off"              
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit">
          Register me!
        </button>
      </form>
    </div>
  );
};