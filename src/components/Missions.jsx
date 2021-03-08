import styles from "../styles/components/Missions.module.scss";

const DashboardMenu = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

export default DashboardMenu;
