import styles from './Layout.module.css'

const Title = ({ children }) => {
  return ( 
    <div>
      <h1 className={styles["title"]}>{children}</h1>
    </div>
  );
};

export default Title;
