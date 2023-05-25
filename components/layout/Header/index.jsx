import styles from "./Header.module.scss";

const Header = async ({ children }) => {
	return <header className={styles.header}>{children}</header>;
};

export default Header;
