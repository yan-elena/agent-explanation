import ExecutedDeed from "./jason/actionEvent/ExecutedDeed";
import ExternalActionFinished from "./jason/actionEvent/ExternalActionFinished";
import InternalActionFinished from "./jason/actionEvent/InternalActionFinished";
import BeliefAdded from "./jason/beliefEvent/BeliefAdded";
import BeliefRemoved from "./jason/beliefEvent/BeliefRemoved";
import GoalCreated from "./jason/goalEvent/GoalCreated";
import GoalRemoved from "./jason/goalEvent/GoalRemoved";
import SelectPlanEvent from "./jason/planEvent/SelectPlanEvent";
import NewArtifactSignal from "./jason/signalEvent/NewArtifactSignal";
import NewSpeechActMessage from "./jason/speechActMessageEvent/NewSpeechActMessage";
import SendMessage from "./jason/speechActMessageEvent/SendMessage";
import NewDesire from "./bdi/NewDesire";
import DesireCommitted from "./bdi/DesireCommitted";
import DesireRemoved from "./bdi/DesireRemoved";
import ExecutedAction from "./bdi/ExecutedAction";
import BDIBeliefRemoved from "./bdi/BeliefRemoved";
import NewBelief from "./bdi/NewBelief";

const EventComponents = {
    ExecutedDeed: {JASON: <ExecutedDeed/>, BDI: <ExecutedAction/>},
    ExternalActionFinished: {JASON: <ExternalActionFinished/>, BDI: <ExecutedAction/>},
    InternalActionFinished: {JASON: <InternalActionFinished/>, BDI: <ExecutedAction/>},
    BeliefAdded: {JASON: <BeliefAdded/>, BDI: <NewBelief/>},
    BeliefRemoved: {JASON: <BeliefRemoved/>, BDI: <BDIBeliefRemoved/>},
    GoalCreated: {JASON: <GoalCreated/>, BDI: <NewDesire/>},
    GoalRemoved: {JASON: <GoalRemoved/>, BDI: <DesireRemoved/>},
    SelectPlanEvent: {JASON: <SelectPlanEvent/>, BDI: <DesireCommitted/>},
    NewArtifactSignal: {JASON: <NewArtifactSignal/>, BDI: <NewArtifactSignal/>},
    NewSpeechActMessage: {JASON: <NewSpeechActMessage/>, BDI: <NewSpeechActMessage/>},
    SendMessage: {JASON: <SendMessage/>, BDI: <SendMessage/>}
};

export default EventComponents;