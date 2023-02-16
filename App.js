import React, { useState } from 'react';
import './App.css';

function LoginPage({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
    // TODO: Send login request to server
  };

  return (
    <div className="pop-up">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="button-container">
          <button type="submit">Login</button>
          <button type="button" onClick={onClose}>Close</button>
        </div>
      </form>
    </div>
  );
}

function RegisterPage({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(`Name: ${name} Last Name: ${lastName} Email: ${email} Password: ${password}`);
    // TODO: Send registration request to server
  };

  return (
    <div className="pop-up">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="button-container">
          <button type="submit">Register</button>
          <button type="button" onClick={onClose}>Close</button>
        </div>
      </form>
    </div>
  );
}

function App() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [popUpContent, setPopUpContent] = useState(null);

  const handlePopUp = (content) => {
    setPopUpContent(content);
    setIsPopUpOpen(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
    setPopUpContent(null);
  };

return(
  <div className="container">
      <div className="long-bar">
        <button className="button" onClick={() => handlePopUp('login')}>
          Login
        </button>
        <button className="button" onClick={() => handlePopUp('register')}>
          Register
        </button>
        {isPopUpOpen && popUpContent === 'login' && (
          <LoginPage onClose={handleClosePopUp} />
        )}
        {isPopUpOpen && popUpContent === 'register' && (
    <RegisterPage onClose={handleClosePopUp} />
)}
</div>
</div>
);
}


export default App;