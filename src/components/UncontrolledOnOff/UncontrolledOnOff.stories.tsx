import React, {useState} from "react";
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

const callback= action("on or off clicked")

export const OnMode = () => <UncontrolledOnOff defaultOn={true}  onClick={callback} />
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onClick={callback} />

export const ModeChanging = () => {
    return <UncontrolledOnOff  onClick={callback} />
}