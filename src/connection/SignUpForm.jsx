import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SignUpForm.css';

const SignUpForm = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    // Fetch CSRF token from your Laravel application
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/csrf-cookie');
        if (response.status === 200) {
          setCsrfToken(response.data.csrfToken);
        }
      } catch (error) {
        console.error('Failed to fetch CSRF token:', error.message);
      }
    };

    fetchCsrfToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/register', {
        nom: nom,
        prenom: prenom,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
      }, {
        headers: {
          'X-CSRF-TOKEN': csrfToken, // Include CSRF token in the headers
        },
      });

      if (response.status !== 200) {
        const errorData = response.data;
        throw new Error(errorData.message || 'Failed to register. Please try again.');
      }

      const data = response.data;
      console.log(data); // Handle successful response here
    } catch (error) {
      setErrorMessage(error.message);
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="container">
      <h2>Sign Up Form</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="prenom">Prenom</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
