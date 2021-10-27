import { useState } from 'react';
import MenuItem from './MenuItem';
import { MENU_ITEM } from './MenuConstant';

import './Menu.module.css';

const Menu = ({
  onMenuItemOnClick
}) => { 

  const [currentItem, setCurrentItem] = useState();

  const menuItemClickHandler = (id) => {
    setCurrentItem(id);
    onMenuItemOnClick(id);
  }

  return (
      <aside className="menu">
        {MENU_ITEM.map(x =>
            <MenuItem 
              key={x.id} 
              id={x.id}
              isSelected={x.id == currentItem} 
              onClick={menuItemClickHandler}
            >
                {x.text}
            </MenuItem>
        )}
        
    </aside>
  );
}

export default Menu;