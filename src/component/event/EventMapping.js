import PlanAdded from "./implementation/planEvent/PlanAdded";
import ExecutedDeed from "./implementation/actionEvent/ExecutedDeed";
import ExternalActionFinished from "./implementation/actionEvent/ExternalActionFinished";
import ExternalActionTriggered from "./implementation/actionEvent/ExternalActionTriggered";
import InternalActionFinished from "./implementation/actionEvent/InternalActionFinished";
import BeliefFromSrcAdded from "./implementation/beliefEvent/BeliefFromSrcAdded";
import BeliefAdded from "./implementation/beliefEvent/BeliefAdded";
import BeliefFromSrcRemoved from "./implementation/beliefEvent/BeliefFromSrcRemoved";
import BeliefRemoved from "./implementation/beliefEvent/BeliefRemoved";
import GoalCreated from "./implementation/goalEvent/GoalCreated";
import GoalRemoved from "./implementation/goalEvent/GoalRemoved";
import GoalSuspended from "./implementation/goalEvent/GoalSuspended";
import IntentionCreated from "./implementation/intentionEvent/IntentionCreated";
import IntentionRemoved from "./implementation/intentionEvent/IntentionRemoved";
import IntentionSuspended from "./implementation/intentionEvent/IntentionSuspended";
import IntentionWaiting from "./implementation/intentionEvent/IntentionWaiting";
import NewPercept from "./implementation/perceptEvent/NewPercept";
import PlanRemoved from "./implementation/planEvent/PlanRemoved";
import SelectPlanEvent from "./implementation/planEvent/SelectPlanEvent";
import ReasoningCycleStarted from "./implementation/reasoningCycleEvent/ReasoningCycleStarted";
import NewAgentSignal from "./implementation/signalEvent/NewAgentSignal";
import NewArtifactSignal from "./implementation/signalEvent/NewArtifactSignal";
import MailBoxMessages from "./implementation/speechActMessageEvent/MailBoxMessages";
import NewSpeechActMessage from "./implementation/speechActMessageEvent/NewSpeechActMessage";
import SelectedMessage from "./implementation/speechActMessageEvent/SelectedMessage";
import SendMessage from "./implementation/speechActMessageEvent/SendMessage";
import PlanSelected from "./implementation/goalEvent/PlanSelected";
import DesireRemoved from "./design/DesireRemoved";
import ExecutedAction from "./design/ExecutedAction";
import NewBelief from "./design/NewBelief";
import SelectPlan from "./design/SelectPlan";
import BDIBeliefRemoved from "./design/BeliefRemoved";
import NewIntention from "./design/NewIntention";
import NewDesire from "./design/NewDesire";

const EventMapping = {
    ExecutedDeed: {implementation: <ExecutedDeed/>, design: <ExecutedAction/>},
    ExternalActionFinished: {implementation: <ExternalActionFinished/>, design: <ExecutedAction/>},
    ExternalActionTriggered: {implementation: <ExternalActionTriggered/>, design: <></>},
    InternalActionFinished: {implementation: <InternalActionFinished/>, design: <ExecutedAction/>},
    BeliefAdded: {implementation: <BeliefAdded/>, design: <NewBelief/>},
    BeliefFromSrcAdded: {implementation: <BeliefFromSrcAdded/>, design: <></>},
    BeliefFromSrcRemoved: {implementation: <BeliefFromSrcRemoved/>, design: <></>},
    BeliefRemoved: {implementation: <BeliefRemoved/>, design: <BDIBeliefRemoved/>},
    GoalCreated: {implementation: <GoalCreated/>, design: <NewDesire/>},
    GoalRemoved: {implementation: <GoalRemoved/>, design: <DesireRemoved/>},
    GoalSuspended: {implementation: <GoalSuspended/>, design: <></>},
    PlanSelected: {implementation: <PlanSelected/>, design: <></>},
    IntentionCreated: {implementation: <IntentionCreated/>, design: <NewIntention/>},
    IntentionRemoved: {implementation: <IntentionRemoved/>, design: <></>},
    IntentionSuspended: {implementation: <IntentionSuspended/>, design: <></>},
    IntentionWaiting: {implementation: <IntentionWaiting/>, design: <></>},
    NewPercept: {implementation: <NewPercept/>, design: <></>},
    PlanAdded: {implementation: <PlanAdded/>, design: <></>},
    PlanRemoved: {implementation: <PlanRemoved/>, design: <></>},
    SelectPlanEvent: {implementation: <SelectPlanEvent/>, design: <SelectPlan/>},
    ReasoningCycleStarted: {implementation: <ReasoningCycleStarted/>, design:  <></>},
    NewAgentSignal: {implementation: <NewAgentSignal/>, design: <></>},
    NewArtifactSignal: {implementation: <NewArtifactSignal/>, design: <NewArtifactSignal/>},
    MailBoxMessages: {implementation: <MailBoxMessages/>, design: <></>},
    NewSpeechActMessage: {implementation: <NewSpeechActMessage/>, design: <NewSpeechActMessage/>},
    SelectedMessage: {implementation: <SelectedMessage/>, design: <></>},
    SendMessage: {implementation: <SendMessage/>, design: <ExecutedAction/>}
};

export default EventMapping;