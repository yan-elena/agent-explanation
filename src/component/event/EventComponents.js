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

const EventComponents = {
    ExecutedDeed: {JASON: <ExecutedDeed/>, BDI: <ExecutedDeed/>},
    ExternalActionFinished: {JASON: <ExternalActionFinished/>, BDI: <ExternalActionFinished/>},
    ExternalActionTriggered: {JASON: <ExternalActionTriggered/>, BDI: <ExternalActionTriggered/>},
    InternalActionFinished: {JASON: <InternalActionFinished/>, BDI: <InternalActionFinished/>},
    BeliefAdded: {JASON: <BeliefAdded/>, BDI: <BeliefAdded/>},
    BeliefFromSrcAdded: {JASON: <BeliefFromSrcAdded/>, BDI: <BeliefFromSrcAdded/>},
    BeliefFromSrcRemoved: {JASON: <BeliefFromSrcRemoved/>, BDI: <BeliefFromSrcRemoved/>},
    BeliefRemoved: {JASON: <BeliefRemoved/>, BDI: <BeliefRemoved/>},
    GoalCreated: {JASON: <GoalCreated/>, BDI: <NewDesire/>},
    GoalRemoved: {JASON: <GoalRemoved/>, BDI: <GoalRemoved/>},
    GoalSuspended: {JASON: <GoalSuspended/>, BDI: <GoalSuspended/>},
    PlanSelected: {JASON: <PlanSelected/>, BDI: <PlanSelected/>},
    IntentionCreated: {JASON: <IntentionCreated/>, BDI: <IntentionCreated/>},
    IntentionRemoved: {JASON: <IntentionRemoved/>, BDI: <IntentionRemoved/>},
    IntentionSuspended: {JASON: <IntentionSuspended/>, BDI: <IntentionSuspended/>},
    IntentionUpdated: {JASON: <IntentionUpdated/>, BDI: <IntentionUpdated/>},
    IntentionWaiting: {JASON: <IntentionWaiting/>, BDI: <IntentionWaiting/>},
    NewPercept: {JASON: <NewPercept/>, BDI: <NewPercept/>},
    PlanAdded: {JASON: <PlanAdded/>, BDI: <></>},
    PlanRemoved: {JASON: <PlanRemoved/>, BDI: <PlanRemoved/>},
    SelectPlanEvent: {JASON: <SelectPlanEvent/>, BDI: <SelectPlanEvent/>},
    ReasoningCycleStarted: {JASON: <ReasoningCycleStarted/>, BDI:  <></>},
    NewAgentSignal: {JASON: <NewAgentSignal/>, BDI: <NewAgentSignal/>},
    NewArtifactSignal: {JASON: <NewArtifactSignal/>, BDI: <NewArtifactSignal/>},
    MailBoxMessages: {JASON: <MailBoxMessages/>, BDI: <MailBoxMessages/>},
    NewSpeechActMessage: {JASON: <NewSpeechActMessage/>, BDI: <NewSpeechActMessage/>},
    SelectedMessage: {JASON: <SelectedMessage/>, BDI: <SelectedMessage/>},
    SendMessage: {JASON: <SendMessage/>, BDI: <SendMessage/>}
};

export default EventComponents;