# ChatGPT Connector

This project provides a connector for interacting with the ChatGPT API. It includes a main class for handling communication and an example of how to use it.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the necessary dependencies, run:

```
npm install
```

## Usage

To use the `ChatGPTConnector`, you can follow the example provided in `src/examples/example1.ts`. Here’s a brief overview of how to initialize the connector and send a message:

```typescript
import { ChatGPTConnector } from '../connector';

const connector = new ChatGPTConnector();
connector.initialize();
connector.sendMessage("Hello, ChatGPT!");
```

## API Reference

### ChatGPTConnector

- **initialize()**: Initializes the connector and prepares it for communication.
- **sendMessage(message: string)**: Sends a message to the ChatGPT API.
- **receiveMessage()**: Receives a message from the ChatGPT API.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.