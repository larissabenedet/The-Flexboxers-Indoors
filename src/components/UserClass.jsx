import styles from "../styles/components/UserClass.module.scss";

const UserClass = () => {
    return (
        <div className={styles.container}>
            <div>
                <span>Classe</span>
                <div className={styles.className}>
                    <div>
                        <img src="./img/pinceis.png" alt="Classe" />
                    </div>
                    <div>
                        <p>Artista</p>
                        <p>Criatividade, Pensamento</p>
                    </div>
                </div>
                <p>
                    O Artista tem o dom de sempre encontrar a melhor maneira
                    para passar o tempo e pode ficar horas criando, movido
                    apenas pela imaginação.
                </p>
            </div>
        </div>
    );
};

export default UserClass;
