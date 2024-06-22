# Narrative Generator Component

This repository contains a prototype implementation of the **Narrative Generator** for our research project _A Multi-Level Explainability Framework for BDI Agents_. You can directly access the deployed web application **[here](https://yan-elena.github.io/agent-explanation/)**.

## A Multi-Level Explainability Framework for Engineering and Understanding BDI Agents

<img src="https://github.com/yan-elena/agent-logging/assets/78790594/054d9927-5c17-4694-9f7f-04e363161e1f" width=50%>

The primary levels of abstraction identified in this study are as follows:
- The **Implementation Level**: a detailed narrative closely related to the Agent and Multi-Agent Systems for debugging and testing.
- The **Design Level**: a level that describes the agent behaviour regardless of its implementation for analysis and verification.
- The **Domain Level**: a high-level narrative that explains the behaviour with reference to the domain and requirements of the system - *(work in progress)*.

## Usage

1a. Try it out at **[https://yan-elena.github.io/agent-explanation](https://yan-elena.github.io/agent-explanation/)** without installing anything.

1b. If you wish to use it locally, you need [Node.js](https://nodejs.org/en) installed. Then you can follow the instructions below.
Install all dependencies required with:

```
npm install
```

Start the react development dashboard with:

```
npm start
```
Reach `http://localhost:3000/agent-explanation` from your browser to access the dashboard.

2. Following the instructions presented in the **[Logger Component](https://github.com/yan-elena/agent-logging)** to generate the `log files` of your Jason or JaCaMo project.
Once you have the log files, you can upload them to the Home Page.

<img src="https://github.com/yan-elena/agent-explanation/assets/78790594/2f3ba3c4-bd31-41ea-bd5f-ff588ee9824f" width=50%>

3. At this point, you can select the level to inspect for each agent in the system.

<img src="https://github.com/yan-elena/domestic-robot-example/assets/78790594/954fe114-ba57-4b07-8e9b-8e6977c8f238" width=50%>

## Features

### Narrative at the Implementation Level
A detailed and technical level that follows Jason's operational semantics and reasoning cycle.

<img src="https://github.com/yan-elena/agent-explanation/assets/78790594/11728883-60e6-4dc9-aa81-26cbe472cec2" width=50%>

### Narrative at the Design Level
A higher level that narrates the agent's decisions following its cognitive abstraction according to the Belief-Desire-Intention model.

<img src="https://github.com/yan-elena/agent-explanation/assets/78790594/e9131856-fcb1-4eb7-96d8-3254be392411" width=50%>

### Explanation of a specific event
Some events are associated with an explanation of a previous event that caused it.

<img src="https://github.com/yan-elena/agent-explanation/assets/78790594/eac6a6e1-23a4-4d9d-8c13-c0c0b2eb2126" width=70%>


## Examples
You can also use the log files in the `/examples` folder generated for the `alice-bob` and `domestic-robot`[(repo)](https://github.com/yan-elena/domestic-robot-example) running examples to try our multi-level explainability framework.
