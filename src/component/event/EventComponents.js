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

const EventComponents = {
    ExecutedDeed: {jason: <ExecutedDeed/>, bdi: <ExecutedDeed/>},
    ExternalActionFinished: {jason: <ExternalActionFinished/>, bdi: <ExternalActionFinished/>},
    ExternalActionTriggered: {jason: <ExternalActionTriggered/>, bdi: <ExternalActionTriggered/>},
    InternalActionFinished: {jason: <InternalActionFinished/>, bdi: <InternalActionFinished/>},
    BeliefAdded: {jason: <BeliefAdded/>, bdi: <BeliefAdded/>},
    BeliefFromSrcAdded: {jason: <BeliefFromSrcAdded/>, bdi: <BeliefFromSrcAdded/>},
    BeliefFromSrcRemoved: {jason: <BeliefFromSrcRemoved/>, bdi: <BeliefFromSrcRemoved/>},
    BeliefRemoved: {jason: <BeliefRemoved/>, bdi: <BeliefRemoved/>},
    GoalCreated: {jason: <GoalCreated/>, bdi: <GoalCreated/>},
    GoalRemoved: {jason: <GoalRemoved/>, bdi: <GoalRemoved/>},
    GoalSuspended: {jason: <GoalSuspended/>, bdi: <GoalSuspended/>},
    PlanSelected: {jason: <PlanSelected/>, bdi: <PlanSelected/>},
    IntentionCreated: {jason: <IntentionCreated/>, bdi: <IntentionCreated/>},
    IntentionRemoved: {jason: <IntentionRemoved/>, bdi: <IntentionRemoved/>},
    IntentionSuspended: {jason: <IntentionSuspended/>, bdi: <IntentionSuspended/>},
    IntentionUpdated: {jason: <IntentionUpdated/>, bdi: <IntentionUpdated/>},
    IntentionWaiting: {jason: <IntentionWaiting/>, bdi: <IntentionWaiting/>},
    NewPercept: {jason: <NewPercept/>, bdi: <NewPercept/>},
    PlanAdded: {jason: <PlanAdded/>, bdi: <PlanAdded/>},
    PlanRemoved: {jason: <PlanRemoved/>, bdi: <PlanRemoved/>},
    SelectPlanEvent: {jason: <SelectPlanEvent/>, bdi: <SelectPlanEvent/>},
    ReasoningCycleStarted: {jason: <ReasoningCycleStarted/>, bdi: <ReasoningCycleStarted/>},
    NewAgentSignal: {jason: <NewAgentSignal/>, bdi: <NewAgentSignal/>},
    NewArtifactSignal: {jason: <NewArtifactSignal/>, bdi: <NewArtifactSignal/>},
    MailBoxMessages: {jason: <MailBoxMessages/>, bdi: <MailBoxMessages/>},
    NewSpeechActMessage: {jason: <NewSpeechActMessage/>, bdi: <NewSpeechActMessage/>},
    SelectedMessage: {jason: <SelectedMessage/>, bdi: <SelectedMessage/>},
    SendMessage: {jason: <SendMessage/>, bdi: <SendMessage/>}
};

export default EventComponents;