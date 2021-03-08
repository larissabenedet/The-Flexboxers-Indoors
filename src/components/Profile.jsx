import styles from "../styles/components/Profile.module.scss";

const Profile = () => {
    return (
        <div className={styles.container}>
            {false ? (
                <img src="./img/masculino.png" />
            ) : (
                <img src="./img/feminino.png" />
            )}
            <div className={styles.info}>
                <p>Usuário</p>
                <span>Nível 1</span>
                {/* <XpBar></XpBar> */}
            </div>
        </div>
    );
};

export default Profile;
