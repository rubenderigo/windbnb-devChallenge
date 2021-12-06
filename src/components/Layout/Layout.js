import Title from 'components/Layout/Title';
import AmountStay from 'components/Layout/AmountStays';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <div className={styles["title-cant-stays-container"]}>
        <Title>Stays in Finland</Title>
        <AmountStay />
      </div>
      {children}
    </div>
  );
};

export default Layout;
