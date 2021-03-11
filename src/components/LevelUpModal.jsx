import styles from "../styles/components/LevelUpModal.module.scss";
import { useContext } from "react";
import { MissionContext } from "../contexts/MissionsContext";

const LevelUpModal = ({ onClose }) => {
    const { level } = useContext(MissionContext);

    return (
        <div className={styles.modalActive}>
            <div className={styles.container}>
                <button
                    className={styles.closeButton}
                    type="button"
                    onClick={onClose}
                >
                    <div></div>
                    <div></div>
                </button>
                <header>
                    <h1>Parábens!</h1>
                    <h1>Você passou de nível</h1>
                </header>
                <main>
                    <p>Seu novo nível é:</p>
                    <div className={styles.level}>
                        <h1>{level}</h1>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default LevelUpModal;
