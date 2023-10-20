import {} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../components/nav.module.css'

function Nav() {
/*Hook- useNavgite*/
  const navigate = useNavigate();

  /*criando a função para limpar a sessão e voltar para o home */
  const handleLogout = async ()=>{
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('senhaData');
    alert("saindo da sessão");
    navigate('/');
  }

  return (
    <>
      <header className={styles.menu}>
        <h2 >Sushi Bigas</h2>
        <nav className={styles.navmenu}>
          <ul>
            <li>
              <Link to="/" className={styles.tlink}>Home</Link>
            </li>
            <li>
              <Link to="/produtos" className={styles.tlink}>Produtos</Link>
            </li>
            <li>
              <Link to="sobre" className={styles.tlink}>Sobre</Link>
            </li>
            {/* <li>
              <Link to="/cadastrar/produto">Cadastrar Produto</Link>
            </li> */}
            <li>
              <Link to="/login" className={styles.tlink}>Login</Link>
            </li>
            <button onClick={handleLogout} >Logout</button>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Nav;
