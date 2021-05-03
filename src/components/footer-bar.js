import React from "react";
import { Link } from "react-router-dom";

import Agent from "../modal/agent";
import Timer from "../modal/timer";
import Menu from "../modal/menu";

export default function Footbar(){
    return(
        <div className="foot_bar">
            <div className="foot_left">
                    <sub>
                        <Agent />
                    </sub>
            </div>
            <div className="foot_center">
                <sub>
                    <Timer />
                </sub>
            </div>
            <div className="foot_right">
                <sub>
                    <Menu />
                </sub>
            </div>
        </div>
    )
}