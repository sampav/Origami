import style from './NavigationItem.module.css';

function NavigationItem(props) {

    return (
        <li className={style.listItem}>
            <a href="#" className={style.NavListItem}>{props.children}</a>
        </li>
    )

}

export default NavigationItem;