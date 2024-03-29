# A Multi-Level Explainability Framework for BDI Multi Agent Systems - Narrative Generator Component

This repository contains a prototype implementation of the **Narrative Generator** for our research project _A Multi-Level Explainability Framework for BDI Multi Agent Systems_. You access directly the deployed web application **[here](https://yan-elena.github.io/agent-explanation/)** without installing anything.

## The Multi-Level Explainability Framework
<img src="https://github.com/yan-elena/agent-explanation/assets/78790594/d77f7f57-79fc-4a60-86f8-1410f2c0e7c7" width=50%>

This framework aims to address the problem of AI-systems explainability at multiple levels: implementation, design, and domain levels. In particular, the idea is to use the logs of the JaCaMo BDI Multi-Agent System produced by the **[Logger Component](https://github.com/yan-elena/agent-logging)** and automatically extract narratives at multiple levels.

The primary levels of abstraction identified in this study are as follows:
- The **Implementation Level**: a detailed narrative closely related to the Agent and Multi-Agent Systems useful for debugging and testing.
- The **Design Level**: a level that describes the agent behavior regardless of its implementation useful for analysis and verification.
- The **Domain Level**: a high-level narrative that explains the behavior with reference to the domain and requirements of the system. (work in progress)

## Usage

Following the instructions presented in the **[Logger Component](https://github.com/yan-elena/agent-logging)** to generate the `log files` of your JaCaMo project.
Once the log files have been obtained, they can be loaded in the Home Page:

<img src="https://github.com/yan-elena/agent-explanation/assets/78790594/2f3ba3c4-bd31-41ea-bd5f-ff588ee9824f" width=50%>

At this point, you can navigate through the generated narratives at multiple levels for each agent in the system.

<img src="https://github.com/yan-elena/agent-explanation/assets/78790594/ddfd0ca2-1475-4119-8c1a-c7ce318e5ed4" width=50%>

## Examples
You can also use the example log files in the `/examples` folder to visualize the result and try the multi-level explanation.
