
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },

];

const Links = () => {
    const [open, setOpen] = useState(false);

    return (
        <div styles={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
            </div>
            <img
                className={styles.menuButton}
                src="/menu.png"
                alt=""
                width={30}
                height={30}
                onClick={() => setOpen((prev) => !prev)}
            />
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Links;