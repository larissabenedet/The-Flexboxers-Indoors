import styles from "../styles/components/Modal.module.scss";

const ModalUser = ({onClose = () => {} }) => {

  return (
    <div className={styles.modalActive}>
      <div className={styles.container}>
        <h1>Antes de começar sua aventura, por favor crie seu personagem:</h1>
            <form>
                <p>Nome</p>
                <input type="text" id="name" name="name"/>
                
                <p>Gênero</p>
                <input type="radio" id="masculino" name="genero" value="Masculino"/>
                <label for="masculino"> Masculino</label>
                <input type="radio" id="feminino" name="genero" value="Feminino"/>
                <label for="feminino"> Feminino</label>

                <p>Classe</p>
                <input type="radio" id="artista" name="classe" value="Artista"/> 
                <label for="artista"> Artista</label>
                <input type="radio" id="estudioso" name="classe" value="Estudioso"/> 
                <label for="estudioso"> Estudioso</label>
                <input type="radio" id="explorador" name="classe" value="Explorador"/> 
                <label for="explorador"> Explorador</label>

                <footer>
                <button type="submit" onClick={onClose}>Concluído</button>
                </footer>
            </form>
      </div>
    </div>
  );
};

export default ModalUser;
