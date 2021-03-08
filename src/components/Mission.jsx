import styles from "../styles/components/Mission.module.scss";

const Mission = (props) => {
    if (props.disabled) {
        return (
            <>
                <div
                    className={styles.mission}
                    style={{ filter: "saturate(0)" }}
                >
                    <img src={props.img} alt="mission" />
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className={styles.mission}>
                    <img src={props.img} alt="mission" />
                </div>
            </>
        );
    }
};

export default Mission;
