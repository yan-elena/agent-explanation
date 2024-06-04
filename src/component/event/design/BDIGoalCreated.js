import DesireCommitted from "./DesireCommitted";
import NewDesire from "./NewDesire";

function BDIGoalCreated(props) {
    return (
        <div>
            <li className="timeline-item mb-5" key={props.event.timestamp + "_" + props.key}>
                <NewDesire log={props.log} event={props.event} filter={props.filter} level={props.level}/>
            </li>
            <li className="timeline-item mb-5" key={props.event.timestamp + "_" + props.key + 1}>
                <DesireCommitted log={props.log} event={props.event} filter={props.filter} level={props.level}/>
            </li>
        </div>
    )
}

export default BDIGoalCreated;