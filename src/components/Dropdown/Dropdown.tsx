import { MouseEvent, ReactElement, useState } from "react";
import "./Dropdown.scss";
import arrow from "../../assets/icons/arrow.svg";

export default function Dropdown({ title, children }: {
    title: string;
    children: ReactElement;
}) {
    const [toggle, setToggle] = useState(false)



    function toggleActive(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>): void {
        console.log(e.target);

        setToggle(  !toggle  )
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
