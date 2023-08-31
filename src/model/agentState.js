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
