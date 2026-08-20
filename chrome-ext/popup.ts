/// <reference types="@types/chrome" />

const statusEl = document.getElementById("status") as HTMLElement;
const statusText = document.getElementById("status-text") as HTMLElement;
const urlEl = document.getElementById("url") as HTMLElement;
const titleEl = document.getElementById("title") as HTMLElement;
const connectBtn = document.getElementById("connect-btn") as HTMLButtonElement;

async function updateStatus() {
  try {
    const response = await fetch("http://localhost:9009/status");
    if (response.ok) {
      statusEl.className = "status connected";
      statusText.textContent = "Connected";
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
          urlEl.textContent = tabs[0].url || "-";
          titleEl.textContent = tabs[0].title || "-";
        }
      });
    } else {
      throw new Error("Not connected");
    }
  } catch {
    statusEl.className = "status disconnected";
    statusText.textContent = "Disconnected";
  }
}

connectBtn.addEventListener("click", updateStatus);
chrome.tabs.onUpdated.addListener(updateStatus);
chrome.windows.onFocusChanged.addListener(updateStatus);
updateStatus();