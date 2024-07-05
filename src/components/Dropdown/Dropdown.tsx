import { MouseEvent, useState } from "react";
import "./Dropdown.scss";
import arrow from "@assets/icons/arrow.svg";

type DropdownProps = {
    title: string;
    children?: any;
};

export default function Dropdown({ title, children }: DropdownProps) {
    const [toggle, setToggle] = useState(false)

    function toggleActive(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>): void {
        const element = e.currentTarget as HTMLDivElement;
        element.classList.toggle('active');
        setToggle(!toggle);
    }

    return (
        <div className="dropdown">
            <div className="dd-header" onClick={toggleActive}>
                <div className="dd-title">{title}</div>
                <span className="dd-arrow">&#x276E;</span>
            </div>
            <div className="dd-content">{children}</div>
        </div>
    );
}
