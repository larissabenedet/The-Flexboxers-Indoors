import styles from "../styles/components/Profile.module.scss";

const Profile = () => {
    return (
        <div className={styles.container}>
            <div className={styles.pic}>
                {true ? (
                    <img src="./img/masculino.png" />
                ) : (
                    <img src="./img/feminino.png" />
                )}
            </div>
            <div className={styles.info}></div>
        </div>
    );
};

export default Profile;
