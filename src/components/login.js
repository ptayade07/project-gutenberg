import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/main');
  };

  return (
    <div className={styles['login-page']}>
      <div className={styles['login-background']}></div>
      <div className={styles['login-container']}>
        <div className={styles['login-card']}>
          <h1 className={styles['heading-gradient']}>Project Gutenberg</h1>
          <h1 className={styles['heading-white']}>Your Digital Library</h1>
          
          <div className={styles['features-row']}>
            <span>📚 Read <span className={styles.arrow}>→</span></span>
            <span>⭐ Rate <span className={styles.arrow}>→</span></span>
            <span>💭 Review <span className={styles.arrow}>→</span></span>
            <span>🤝 Share</span>
          </div>

          <div className={styles['input-group']}>
            <input type="email" placeholder="Your email address" />
          </div>

          <button className={styles['sign-in']} onClick={handleSignIn}>Sign in to Library</button>
          
          <p className={styles['account-text']}>Start your reading journey today!</p>

          <div className={styles.divider}>
            <span>OR</span>
          </div>

          <div className={styles['social-buttons']}>
            <button className={styles['social-button']}>
              Continue with Google
            </button>
            <button className={styles['social-button']}>
              Continue with Apple
            </button>
          </div>

          <div className={styles.terms}>
            By signing up, you agree to our{' '}
            <a href="/terms">Terms of Service</a> and{' '}
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 