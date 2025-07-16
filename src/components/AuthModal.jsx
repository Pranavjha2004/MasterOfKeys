import React, { useState } from 'react';

function AuthModal({ showAuthModal, setShowAuthModal, isRegistering, setIsRegistering, handleLogin, handleSignup, authMessage, isDarkMode }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuthAction = () => {
    if (isRegistering) {
      handleSignup(email, password);
    } else {
      handleLogin(email, password);
    }
  };

  if (!showAuthModal) return null;

  return (
    <div className="modal-overlay">
      <div className={`modal-content ${isDarkMode ? 'dark' : ''}`}>
        <button
          onClick={() => setShowAuthModal(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          {isRegistering ? 'Sign Up' : 'Login'}
        </h2>
        {authMessage && (
          <p className="text-red-500 text-sm mb-4">{authMessage}</p>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full p-3 mb-3 rounded-md border ${isDarkMode ? 'bg-gray-600 border-gray-500 text-gray-100' : 'bg-gray-100 border-gray-300 text-gray-800'}`}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full p-3 mb-4 rounded-md border ${isDarkMode ? 'bg-gray-600 border-gray-500 text-gray-100' : 'bg-gray-100 border-gray-300 text-gray-800'}`}
        />
        {isRegistering ? (
          <button
            onClick={handleAuthAction}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-colors duration-300"
          >
            Sign Up
          </button>
        ) : (
          <button
            onClick={handleAuthAction}
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-md transition-colors duration-300"
          >
            Login
          </button>
        )}
        <button
          onClick={() => {
            setIsRegistering(!isRegistering);
            setEmail(''); // Clear form on toggle
            setPassword(''); // Clear form on toggle
          }}
          className={`mt-4 w-full py-2 text-sm ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
        >
          {isRegistering ? 'Already have an account? Login' : 'Need an account? Sign Up'}
        </button>
      </div>
    </div>
  );
}

export default AuthModal;
