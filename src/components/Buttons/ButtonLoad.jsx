import React from "react";
import { Button} from "./Button";

export const ButtonLoad = ({type,name}) => {


    if(type==='main')return (<Button name={name} />);
}