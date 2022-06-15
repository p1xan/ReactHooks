import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn,setSwitchOn] = useState<boolean>(false);

    return <div className="App">
        <PageTitle title="This is APP component"/>
        <Accordion titleValue="Menu"
                   collapsed={accordionCollapsed}
                   onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
        <OnOff on={switchOn} onChange={ (on) => {setSwitchOn(on)} }/>
        <UncontrolledOnOff onClick={setSwitchOn}/>  {switchOn.toString()}
        <UncontrolledAccordion titleValue="Users"/>
        <Rating value={ratingValue} onClick={setRatingValue}/>
        <UncontrolledRating onChange={x=> x} />

    </div>
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props:PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
