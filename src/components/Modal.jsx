import styles from "../styles/components/Modal.module.scss";

const Modal = ({ id = "modal", onClose }) => {
    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    };

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
                        <img src="img/bolo.png" alt="mission" />
                    </div>
                    <div>
                        <h1>Título da missão</h1>
                        <span>Ganhe: 90xp</span>
                    </div>
                </header>

                <main>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam amet itaque minima odio iusto quae quo, natus
                        reiciendis illum assumenda nostrum deserunt earum enim
                        aliquam asperiores esse architecto voluptate suscipit.
                    </p>
                </main>

                <footer>
                    <button type="button">Desistir</button>
                    <button type="button">Concluir</button>
                </footer>
            </div>
        </div>
    );
};

export default Modal;
