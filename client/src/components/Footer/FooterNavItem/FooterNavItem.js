import style from './FooterNavItem.css';

function FooterNavItem(props) {

    return (
        <li className="footerListItem">
            <a href="#" >{props.children}</a>
        </li>
         
    )
}

export default FooterNavItem;