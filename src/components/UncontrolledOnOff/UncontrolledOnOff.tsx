import React, {useState} from "react";

type PropsType = {
    onClick: (on:boolean) => void,
    defaultOn?: boolean
}

export function UncontrolledOnOff(props: PropsType) {

    console.log("onOff rendering");

    let [on,setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onStyle={
        width:"30px",
        height: "20px",
        border:"1px solid black",
        display:"inline-block",
        padding:"2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle={
        width:"30px",
        height: "20px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:"5px",
        padding:"2px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle={
        width: "20px",
        height:"20px",
        borderRadius:"10px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:"5px",
        backgroundColor: on ? "green" : "red"
    }

    const onClicked = () => {
        setOn(true)
        props.onClick(true)
    }
    const offClicked = () => {
        setOn(false); props.onClick(false)
    }
    return <div>
        <div style={onStyle} onClick={onClicked}> On </div>
        <div style={offStyle} onClick={offClicked}> Off </div>
        <div style={indicatorStyle}></div>
    </div>
}

