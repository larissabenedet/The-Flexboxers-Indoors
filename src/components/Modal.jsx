import styles from "../styles/components/Modal.module.scss";
import { useContext } from "react";
import { MissionContext } from "../contexts/MissionsContext";

const Modal = ({ id = "modal", onClose }) => {
    const { activeMission, completeMission } = useContext(MissionContext);

    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    };

    function handleMissionSucceeded(e) {
        completeMission();
    }

    return (
        <div
            className={styles.modalActive}
            id={id}
            onClick={handleOutsideClick}
        >
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
                    <div className={styles.imgContainer}>
                        <img
                            src={activeMission.img}
                            alt={activeMission.title}
                        />
                    </div>
                    <div>
                        <h1>{activeMission.title}</h1>
                        <span>Ganhe: {activeMission.amount}xp</span>
                    </div>
                </header>

                <main>
                    <p>{activeMission.description}</p>
                </main>

                <footer>
                    <button type="button" onClick={handleMissionSucceeded}>
                        Concluir
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default Modal;
