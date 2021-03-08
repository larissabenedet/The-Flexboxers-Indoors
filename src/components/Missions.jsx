import styles from "../styles/components/Missions.module.scss";

const DashboardMenu = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.missionsTree}>{children}</div>
        </div>
    );
};

export default DashboardMenu;
