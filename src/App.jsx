import React, { useRef } from 'react';
import './App.css';

function App() {
  const widgetRef = useRef(null);

  // Define the Telegram callback globally
  window.onTelegramAuth = function(userData) {
    console.log('Telegram user data:', userData);
    alert(userData)
    // Send userData to your backend for verification here if needed.
  };

  const loadTelegramWidget = () => {
    // Clear any existing widget (if necessary)
    if (widgetRef.current) {
      widgetRef.current.innerHTML = "";
    }
    
    // Create the script element that loads the widget
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://telegram.org/js/telegram-widget.js?7";
    
    // Set the required data attributes
    script.setAttribute('data-telegram-login', 'Ffp035551_bot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-userpic', 'false');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-request-access', 'write');
    script.setAttribute('data-onauth', 'onTelegramAuth');
    
    // Append the script to the designated container
    if (widgetRef.current) {
      widgetRef.current.appendChild(script);
    }
  };

  return (
    <div className="App">
      <h2>Login with Telegram</h2>
      <button onClick={loadTelegramWidget}>Start Telegram Login</button>
      {/* This div is where the Telegram widget will be rendered */}
      <div ref={widgetRef}></div>
    </div>
  );
}

export default App;
