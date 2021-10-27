import style from './Footer.css';
import FooterNavItem from './FooterNavItem/FooterNavItem';

const Footer  = () => {

    return (
            <nav className="navigation">
                <ul>                   
                        <FooterNavItem>Going to 1</FooterNavItem>
                        <FooterNavItem>Going to 2</FooterNavItem>
                        <FooterNavItem>Going to 3</FooterNavItem>
                        <FooterNavItem>Going to 4</FooterNavItem>
                        <FooterNavItem>Going to 5</FooterNavItem>
                        <FooterNavItem>Going to 6</FooterNavItem>
                        <FooterNavItem>Going to 7</FooterNavItem>
                        <FooterNavItem>Going to 8</FooterNavItem>
                        <FooterNavItem>Going to 9</FooterNavItem>

                        <li><img src="blue-origami-bird-flipped.png" alt="yellow"/></li>
                </ul>

                <p >Software University copy& 2019</p>
            </nav>
      )
}

export default Footer;