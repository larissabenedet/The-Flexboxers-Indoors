import styles from "../styles/components/XpBar.module.scss";

const XpBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.XpContainer}>
                <div style={{ width: `${76}%` }}></div>
            </div>
            <span>76/100</span>
        </div>
    );
};

export default XpBar;
