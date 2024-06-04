import DesireCommitted from "./DesireCommitted";
import NewDesire from "./NewDesire";

function BDIGoalCreated(props) {
    return (
        <div>
            <NewDesire log={props.log} event={props.event} filter={props.filter} level={props.level}/>
            <div className={"mb-5"}/>
            <DesireCommitted log={props.log} event={props.event} filter={props.filter} level={props.level}/>
        </div>
    )
}

export default BDIGoalCreated;