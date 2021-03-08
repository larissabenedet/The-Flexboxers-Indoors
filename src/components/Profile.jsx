import styles from "../styles/components/Profile.module.scss";
import XpBar from "../components/XpBar.jsx";

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
                <XpBar />
            </div>
        </div>
    );
};

export default Profile;
