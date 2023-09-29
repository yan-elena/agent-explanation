# Agent Explanation

Explanation component for _a multi-level framework for BDI Multi-Agent Systems_.

Agent-Explanation is a repository that provides the explanation component for inspecting and explaining the behaviour of a BDI multi-agent system. The framework's objective is to provide a multi-level vision of explainability that encompasses both low-level aspects for debugging purposes for developers and high-level aspects for exploring and understanding the system's behaviour for end-users.

You can find the deployed web application **[here](https://yan-elena.github.io/agent-explanation/)** so you can use it without installing anything.

For generating explanations concerning your agent system, you must use the **[logging component](https://github.com/yan-elena/agent-logging)** of the framework and generate log files.
Once the log files have been obtained, they can be loaded into the web application.

You can also use the example files in the `/examples` folder to visualise the result and try the multi-level explanation.

## Multi-level Explainability

<img src="https://github.com/yan-elena/agent-logging/assets/78790594/b3465e2e-b892-42b9-8ae3-3830a2d28ae6" width=50%>

The primary levels of abstraction identified in this study are as follows:
- The **Implementation Level**: a detailed narrative closely related to the Agent and Multi-Agent System for debugging and testing - for developers.
- The **Knowledge Level**: a level that conveys the knowledge aspects of the system to analysis and verification - for designers.
- The **Domain Level**: a high-level narrative that explains the behaviour with reference to the domain and requirements of the system - for users and domain experts.

