import React, {useState} from "react";
import {Button} from "react-bootstrap";
import EventExplanationPage from "../../pages/EventExplanationPage";

function Event(props) {

    const string = (props.type + " " + props.description + " " + props.info + " " + props.timestamp).toLowerCase()
    const filter = props.filter.toLowerCase()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    const description = [];
     const highlightMatchingText = (text, matchingText) => {
        if (text && matchingText) {
            const matchRegex = RegExp(matchingText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), 'ig');

            if (text.matchAll?.(matchRegex)) {
                const matches = [...text.matchAll?.(matchRegex)];

                return text
                    .split(matchRegex)
                    .map((nonBoldText, index, arr) => (
                        <React.Fragment key={index}>
                            {nonBoldText}
                            {index + 1 !== arr.length && <mark>{matches[index]}</mark>}
                        </React.Fragment>
                    ));
            }
        }
        return text
    };

    if (props.description) {
        props.description.split("\n").forEach(item => {
            description.push(highlightMatchingText(item, filter));
            description.push(<br/>);
        });

    }

    if (string.includes(filter) && props.type) {
        return (
            <div>
                <EventExplanationPage show={show} handleClose={handleClose} event={props.description} explanation={props.explanation} log={props.log} level={props.level}/>
                <h6 className="fw-bold">{description}</h6>
                <p className="text-muted fw-bold my-2">{highlightMatchingText("Event type: " + props.type, filter)}</p>
                <p className="text-muted my-1">{props.info && (Array.isArray(props.info) ? [props.info.map(info => highlightMatchingText(info, filter))] : highlightMatchingText(props.info, filter))}</p>
                <p className="text-muted my-1">{highlightMatchingText("Timestamp: " + props.timestamp, filter)}</p>
                {props.explanation && props.explanation.length > 0 ? <Button variant="outline-primary" size="sm" onClick={handleShow}>View explanation</Button> : <></>}
            </div>
        )
    } else {
        return (<></>)
    }
}

export default Event;