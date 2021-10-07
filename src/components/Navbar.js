import {styles} from "../styles"
import { Link } from 'react-router-dom'

function Navbar(){
    return(
      <div style={{display:"fixed"}}>
      <div style={styles.NavWrapper}>
        <Link style={styles.navItem} to="/">HOME</Link>
        <Link style={styles.navItem} to="/showbooks">CATEGORY</Link>
        <Link style={styles.navItem} to="/newbook">NEW BOOK</Link>
      </div>
      </div>
    );
}

export default Navbar