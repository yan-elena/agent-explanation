import React from "react";

function Event(props) {

    const string = (props.type + " " + props.description + " " + props.info + " " + props.timestamp).toLowerCase()
    const filter = props.filter.toLowerCase()

    const description = [];
    const highlightMatchingText = (text, matchingText) => {
        if (text && matchingText) {
            const matchRegex = RegExp(matchingText, 'ig');

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
                <h6 className="fw-bold">{description}</h6>
                <p className="text-muted fw-bold my-2">{highlightMatchingText("Event type: " + props.type, filter)}</p>
                <p className="text-muted my-1">{props.info && (Array.isArray(props.info) ? [props.info.map(info => highlightMatchingText(info, filter))] : highlightMatchingText(props.info, filter))}</p>
                <p className="text-muted my-1">{highlightMatchingText("Timestamp: " + props.timestamp, filter)}</p>
            </div>
        )
    } else {
        return (<></>)
    }
}

export default Event;