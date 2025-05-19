import {Link} from 'react-router-dom';
import './Header.css';
import stashLogo from '../assets/logo-the-stash.png';

export default function Header(){
    return (
        <nav>
            <ul>
                <li><Link to="/">the stash.</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>
                    <Link to="/blog">Blog</Link>
                    <ul>
                        <li><Link to="/blog/fashion">Fashion</Link></li>
                        <li><Link to="/blog/embroidery">Embroidery</Link></li>
                        <li><Link to="/blog/crochet">Crochet</Link></li>
                    </ul>
                </li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}