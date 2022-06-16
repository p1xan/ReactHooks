import React, {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action("accordion mode change event fired")
const onCLickCallback = action("some item was clicked")

export const MenuCollapsedMode = () => <Accordion titleValue="Menu"
                                                  collapsed={true}
                                                  onChange={callback}
                                                  items={[]}
                                                  onClick={onCLickCallback}
/>
export const UsersUnCollapsedMode = () => <Accordion titleValue="Users"
                                                     collapsed={false}
                                                     onChange={callback}
                                                     items={[
                                                         {title: "Pasha", value: 1},
                                                         {title: "Sergey", value: 2},
                                                         {title: "Andrew", value: 3}
                                                         ]}
                                                     onClick={onCLickCallback}
/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue="Users"
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      items={[
                          {title: "Pasha", value: 1},
                          {title: "Sergey", value: 2},
                          {title: "Andrew", value: 3}
                          ]}
                      onClick={onCLickCallback}
    />
}