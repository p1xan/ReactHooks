import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
};

export const WithValue = () => <Select
    onChange={action("value changed")}
    value={"3"}
    items={[
        {title:"Minsk", value:"1"},
        {title:"Kiev", value:"2"},
        {title:"Kharkov", value:"3"}
        ]}
/>

export const WithoutValue = () => <Select
    onChange={action("value changed")}
    items={[
        {title:"Minsk", value:"1"},
        {title:"Kiev", value:"2"},
        {title:"Kharkov", value:"3"}
        ]}
/>
