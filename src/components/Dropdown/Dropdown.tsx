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
        console.log(e.target);
        e.target.classList.toggle('active');
        setToggle(!toggle)
    }

    return (
        <div className="dropdown">
            <div className="top-bar">
                <div className="title">{title}</div>
                <div className="arrow" onClick={(e) => toggleActive(e)}>
                    <img src={arrow} alt="toggle dropdown" />
                </div>
            </div>
            <div className="content">{children}</div>
        </div>
    );
}
