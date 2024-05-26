# Narrative Generator Component

This repository contains a prototype implementation of the **Narrative Generator** for our research project _A Multi-Level Explainability Framework for BDI Multi Agent Systems_. You can directly access the deployed web application **[here](https://yan-elena.github.io/agent-explanation/)**.

## A Multi-Level Explainability Framework for Engineering and Understanding BDI Agent Systems

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

<img src="https://github.com/yan-elena/agent-explanation/assets/78790594/ddfd0ca2-1475-4119-8c1a-c7ce318e5ed4" width=50%>

## Features

**Narrative at Implementation Level**, which narrates every detail of the agent reasoning cycle:

<img src="https://github.com/yan-elena/agent-explanation/assets/78790594/0bd9feb8-f056-4fae-bdbb-7925c5a48ab2" width=80%>


**Narrative at Design Level**, which narrates the agent's decisions following its cognitive abstraction according to the BDI model:

<img src="https://github.com/yan-elena/agent-explanation/assets/78790594/3d00b844-db84-485c-9494-d7199359208d" width=80%>

**Explanation of a specific event**, some events are explained by a previous event that causes it :

<img src="https://github.com/yan-elena/agent-explanation/assets/78790594/8136e35b-8893-44d0-aa30-36d820cfca17" width=80%>

**Filtering function**, for visualise the entire life cycle of a particular event (e.g., goal or intention at the implementation level or desire at the design level)

<img src="https://github.com/yan-elena/agent-explanation/assets/78790594/fcd2078f-c8ed-4aba-a428-df7f07493a57" width=80%>

## Examples
You can also use the log files in the `/examples` folder generated for the `alice-bob` and `domestic-robot`[(repo)](https://github.com/yan-elena/domestic-robot-example) running examples to try our multi-level explainability framework.
