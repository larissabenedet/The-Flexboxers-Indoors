import styles from "../styles/components/Modal.module.scss";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

const ModalUser = ({ onClose }) => {
    const {
        handleClassChange,
        handleInputEntry,
        handleGenderChange,
    } = useContext(UserContext);

    return (
        <div className={styles.modalActive}>
            <div className={styles.container}>
                <h1>
                    Antes de começar sua aventura, por favor crie seu
                    personagem:
                </h1>
                <form>
                    <p>Nome</p>
                    <div>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={handleInputEntry}
                        />
                        <div onChange={handleGenderChange}>
                            <p>Gênero</p>
                            <input
                                type="radio"
                                id="masculino"
                                name="genero"
                                value="Masculino"
                            />

                            <label htmlFor="masculino"> Masculino</label>
                            <input
                                type="radio"
                                id="feminino"
                                name="genero"
                                value="Feminino"
                            />
                            <label htmlFor="feminino"> Feminino</label>
                        </div>
                    </div>

                    <p>Classe</p>
                    <div onChange={handleClassChange}>
                        <input
                            type="radio"
                            id="artista"
                            name="classe"
                            value="Artista"
                        />
                        <label htmlFor="artista"> Artista</label>
                        <input
                            type="radio"
                            id="estudioso"
                            name="classe"
                            value="Estudioso"
                        />
                        <label htmlFor="estudioso"> Estudioso</label>
                        <input
                            type="radio"
                            id="explorador"
                            name="classe"
                            value="Explorador"
                        />
                        <label htmlFor="explorador"> Explorador</label>
                    </div>

                    <footer>
                        <button type="submit" onClick={onClose}>
                            Concluído
                        </button>
                    </footer>
                </form>
            </div>
        </div>
    );
};

export default ModalUser;
