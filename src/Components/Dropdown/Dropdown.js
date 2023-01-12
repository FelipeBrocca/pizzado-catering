import { useEffect, useState} from "react";
import "./Dropdown.css";

const menu = [
    {
        name: "Pizza",
        menu: [
            {
                name: "Menu Clasico"
            },
            {
                name: "Menu Premium"
            }
        ]
    },
    {
        name: "Asado",
        menu: [
            {
                name: "Menu Clasico"
            },
            {
                name: "Menu Premium"
            }
        ],
    },
];

const MenuButton = ({
    menuItem,
    onClick,
    isCloseButton
}) => (
    <button className= "menu-button" onClick={onClick}>
        <span className="menu-button-text">
            {menuItem.name}
        </span>
        {menuItem.menu && !isCloseButton && (
            <span className="material-icons"> ---) </span>
        )}
    </button>
);

const Menu = 
({ menuHeight, isOpen, activeMenu, toggleMenuOpen }) => (
    <div className="wrapper" style={{ height: `${menuHeight}px` }}>
        <div className={`menu-main ${isOpen ? "open" : "" }`} id="mainmenu">
            {menu.map((menuItem) => (
                <>
                    <MenuButton menuItem={menuItem} onClick={() => toggleMenuOpen(menuItem)}
                />
            {menuItem.menu && activeMenu === menuItem.name && (
                <div className="menu-sub" id="submenu">
                    <>
                    <MenuButton isCloseButton menuItem={{
                    ...menuItem
                    }}
                    onClick={() => toggleMenuOpen(menuItem)}
                />
            {menuItem.menu.map((subMenuItem) => (
                <MenuButton menuItem={subMenuItem} />
            ))}
            </>
            </div>
            )}
            </>
            ))}
        </div>
    </div>
);

const Wrapper = () => {
    const [isOpen, setOpen] = useState()
    const [menuHeight, setMenuHeight] = useState()
    const [activeMenu, setActiveMenu] = useState()

    const toggleMenuOpen = ({ menu, name }) => {
        if (!menu) return; // execute button click here
        setActiveMenu(name)
        setOpen(!isOpen)
    };

    useEffect(() => {
        const menuElement = document.getElementById(
            isOpen ? "submenu" : "mainmenu"
        )
        setMenuHeight(menuElement?.clientHeight)
    }, [isOpen])

    return(
        <Menu menuHeight={menuHeight} isOpen={isOpen} activeMenu={activeMenu} toggleMenuOpen={toggleMenuOpen}/>
    );
};

export default Wrapper