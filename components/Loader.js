import styles from './Loader.module.css';

const Loader = () => {
  return (
    <svg className={styles.pl} width="240" height="240" viewBox="0 0 240 240">
      <circle className={`${styles.pl__ring} ${styles.pl__ringA}`} cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
      <circle className={`${styles.pl__ring} ${styles.pl__ringB}`} cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
      <circle className={`${styles.pl__ring} ${styles.pl__ringC}`} cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
      <circle className={`${styles.pl__ring} ${styles.pl__ringD}`} cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
    </svg>
  );
};

export default Loader;
