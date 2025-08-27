import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch message from backend API
    const fetchMessage = async () => {
      try {
        const response = await fetch('/api/hello');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMessage(data.message);
      } catch (err) {
        setError(`Failed to fetch message: ${err.message}`);
        setMessage('Error loading message');
      }
    };

    fetchMessage();
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Hello App</h1>
        <p style={styles.subtitle}>A simple full-stack demo</p>
      </header>
      
      <main style={styles.main}>
        <div style={styles.messageBox}>
          {error ? (
            <div style={styles.error}>
              <p>{error}</p>
              <p>Make sure the backend server is running!</p>
            </div>
          ) : (
            <div style={styles.message}>
              <h2>{message}</h2>
            </div>
          )}
        </div>
        
        <div style={styles.info}>
          <p>This message is fetched from the backend API at <code>/api/hello</code></p>
        </div>
      </main>
      
      <footer style={styles.footer}>
        <p>Built with React + Node.js + Express + Docker</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    padding: '20px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px'
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    margin: '0 0 10px 0'
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#666',
    margin: 0
  },
  main: {
    textAlign: 'center',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '600px'
  },
  messageBox: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px'
  },
  message: {
    color: '#28a745'
  },
  error: {
    color: '#dc3545'
  },
  info: {
    color: '#666',
    fontSize: '0.9rem'
  },
  footer: {
    marginTop: '40px',
    color: '#999',
    fontSize: '0.8rem'
  }
};

export default App;