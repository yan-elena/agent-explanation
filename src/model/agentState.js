export const agentState = {
    intention: {},
    desire: {},
    speechAct: {tell: [], achieve: [], signal: []},
    belief: {self: [], percept: [], others: []}
}

export function resetState() {
    agentState.intention = {}
    agentState.belief = {self: [], percept: [], others: []}
    agentState.speechAct = {tell: [], achieve: [], signal: []}
    agentState.desire = {}
}

export function getIntentionReason(desire, intentionInfo) {
    const im = intentionInfo.intendedMeansInfo
    const id = intentionInfo.id
    let reason = ""

    if (im.length > 0) {
        let parent = im[0].trigger !== desire ? im[0].trigger : (im[1] ? im[1].trigger : "")

        if (parent) {
            if (agentState.speechAct.signal.includes(parent)) {
                reason = " created from the signal " + parent
            } else if (agentState.speechAct.tell.includes(parent)) {
                reason = " created from " + parent + " message"
            } else if (agentState.speechAct.achieve.includes(parent)) {
                reason = " created from intention " + id + " " + parent
            } else if (agentState.belief.self.includes(parent)) {
                reason = " formed from the belief " + parent
            } else if (agentState.belief.percept.includes(parent)) {
                reason = " created from the perception of " + parent
            } else if (agentState.intention[id] && agentState.intention[id].includes(parent)) {
                reason = " created from intention " + id + " " + parent

            }
        }
    }
    return reason
}

export function getCycleEvents(log, index) {
    const cycleStartedIdx = log.indexOf(log.slice(0, index).findLast(e => e.message.type === "ReasoningCycleStarted"))
    const cycleEndIdx = log.indexOf(log.slice(index).find(e => e.message.type === "ReasoningCycleStarted"))
    return log.slice(cycleStartedIdx, cycleEndIdx)
}
