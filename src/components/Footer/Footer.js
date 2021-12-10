import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles['footer-container']}>
      <p className={styles['footer-text']}>created by rubenderigo - devChallenges.io</p>
    </div>
  )
}

export default Footer;
