/// <reference types="@types/chrome" />

const WS_PORT = 9009;
let ws: WebSocket | null = null;

function connectToServer() {
  ws = new WebSocket("ws://localhost:" + WS_PORT);
  ws.onopen = () => console.log("Connected to MCP server");
  ws.onmessage = async (event) => {
    try {
      const message = JSON.parse(event.data as string);
      await handleMessage(message);
    } catch (e) {
      console.error("Parse error", e);
    }
  };
  ws.onclose = () => setTimeout(connectToServer, 5000);
}

async function handleMessage(message: any) {
  const { requestId, type, payload } = message;
  try {
    let result: any;
    if (type === "browser_navigate") result = "Navigated to " + payload.url;
    else if (type === "browser_snapshot") result = "Page snapshot";
    else if (type === "browser_click") result = "Clicked " + payload.ref;
    else if (type === "browser_type") result = "Typed " + payload.text;
    else if (type === "browser_screenshot") result = "screenshot-data";
    else if (type === "getUrl") result = "https://example.com";
    else if (type === "getTitle") result = "Example Page";
    else throw new Error("Unknown type: " + type);
    
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ requestId, type: "response", result }));
    }
  } catch (error: any) {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ requestId, type: "error", error: error.message }));
    }
  }
}

connectToServer();
console.log("AI Browser Bridge extension initialized");