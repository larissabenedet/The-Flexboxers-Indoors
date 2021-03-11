import styles from "../styles/components/Profile.module.scss";
import XpBar from "../components/XpBar.jsx";
import { useContext } from "react";
import { MissionContext } from "../contexts/MissionsContext";

const Profile = () => {
    const {level} = useContext(MissionContext)
    return (
        <div className={styles.container}>
            {false ? (
                <img src="./img/masculino.png" />
            ) : (
                <img src="./img/feminino.png" />
            )}
            <div className={styles.info}>
                <p>Usuário</p>
                <span>Nível {level}</span>
                <XpBar />
            </div>
        </div>
    );
};

export default Profile;
