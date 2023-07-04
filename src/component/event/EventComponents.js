import PlanAdded from "./jason/planEvent/PlanAdded";
import ExecutedDeed from "./jason/actionEvent/ExecutedDeed";
import ExternalActionFinished from "./jason/actionEvent/ExternalActionFinished";
import ExternalActionTriggered from "./jason/actionEvent/ExternalActionTriggered";
import InternalActionFinished from "./jason/actionEvent/InternalActionFinished";
import BeliefFromSrcAdded from "./jason/beliefEvent/BeliefFromSrcAdded";
import BeliefAdded from "./jason/beliefEvent/BeliefAdded";
import BeliefFromSrcRemoved from "./jason/beliefEvent/BeliefFromSrcRemoved";
import BeliefRemoved from "./jason/beliefEvent/BeliefRemoved";
import GoalCreated from "./jason/goalEvent/GoalCreated";
import GoalRemoved from "./jason/goalEvent/GoalRemoved";
import GoalSuspended from "./jason/goalEvent/GoalSuspended";
import IntentionCreated from "./jason/intentionEvent/IntentionCreated";
import IntentionRemoved from "./jason/intentionEvent/IntentionRemoved";
import IntentionSuspended from "./jason/intentionEvent/IntentionSuspended";
import IntentionUpdated from "./jason/intentionEvent/IntentionUpdated";
import IntentionWaiting from "./jason/intentionEvent/IntentionWaiting";
import NewPercept from "./jason/perceptEvent/NewPercept";
import PlanRemoved from "./jason/planEvent/PlanRemoved";
import SelectPlanEvent from "./jason/planEvent/SelectPlanEvent";
import ReasoningCycleStarted from "./jason/reasoningCycleEvent/ReasoningCycleStarted";
import NewAgentSignal from "./jason/signalEvent/NewAgentSignal";
import NewArtifactSignal from "./jason/signalEvent/NewArtifactSignal";
import MailBoxMessages from "./jason/speechActMessageEvent/MailBoxMessages";
import NewSpeechActMessage from "./jason/speechActMessageEvent/NewSpeechActMessage";
import SelectedMessage from "./jason/speechActMessageEvent/SelectedMessage";
import SendMessage from "./jason/speechActMessageEvent/SendMessage";
import PlanSelected from "./jason/goalEvent/PlanSelected";
import NewDesire from "./bdi/NewDesire";
import DesireCommitted from "./bdi/DesireCommitted";
import DesireRemoved from "./bdi/DesireRemoved";
import FoundMean from "./bdi/FoundMean";
import ExecutedAction from "./bdi/ExecutedAction";

const EventComponents = {
    ExecutedDeed: {JASON: <ExecutedDeed/>, BDI: <ExecutedAction/>},
    ExternalActionFinished: {JASON: <ExternalActionFinished/>, BDI: <ExecutedAction/>},
    ExternalActionTriggered: {JASON: <ExternalActionTriggered/>, BDI: <></>},
    InternalActionFinished: {JASON: <InternalActionFinished/>, BDI: <ExecutedAction/>},
    BeliefAdded: {JASON: <BeliefAdded/>, BDI: <BeliefAdded/>},
    BeliefFromSrcAdded: {JASON: <BeliefFromSrcAdded/>, BDI: <></>},
    BeliefFromSrcRemoved: {JASON: <BeliefFromSrcRemoved/>, BDI: <></>},
    BeliefRemoved: {JASON: <BeliefRemoved/>, BDI: <BeliefRemoved/>},
    GoalCreated: {JASON: <GoalCreated/>, BDI: <NewDesire/>},
    GoalRemoved: {JASON: <GoalRemoved/>, BDI: <DesireRemoved/>},
    GoalSuspended: {JASON: <GoalSuspended/>, BDI: <></>},
    PlanSelected: {JASON: <PlanSelected/>, BDI: <FoundMean/>},
    IntentionCreated: {JASON: <IntentionCreated/>, BDI: <DesireCommitted/>},
    IntentionRemoved: {JASON: <IntentionRemoved/>, BDI: <></>},
    IntentionSuspended: {JASON: <IntentionSuspended/>, BDI: <></>},
    IntentionUpdated: {JASON: <IntentionUpdated/>, BDI: <></>},
    IntentionWaiting: {JASON: <IntentionWaiting/>, BDI: <></>},
    NewPercept: {JASON: <NewPercept/>, BDI: <NewPercept/>},
    PlanAdded: {JASON: <PlanAdded/>, BDI: <></>},
    PlanRemoved: {JASON: <PlanRemoved/>, BDI: <></>},
    SelectPlanEvent: {JASON: <SelectPlanEvent/>, BDI: <></>},
    ReasoningCycleStarted: {JASON: <ReasoningCycleStarted/>, BDI:  <></>},
    NewAgentSignal: {JASON: <NewAgentSignal/>, BDI: <NewAgentSignal/>},
    NewArtifactSignal: {JASON: <NewArtifactSignal/>, BDI: <NewArtifactSignal/>},
    MailBoxMessages: {JASON: <MailBoxMessages/>, BDI: <MailBoxMessages/>},
    NewSpeechActMessage: {JASON: <NewSpeechActMessage/>, BDI: <NewSpeechActMessage/>},
    SelectedMessage: {JASON: <SelectedMessage/>, BDI: <SelectedMessage/>},
    SendMessage: {JASON: <SendMessage/>, BDI: <SendMessage/>}
};

export default EventComponents;