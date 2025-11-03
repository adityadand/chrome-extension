let toggle = false;

chrome.action.onClicked.addListener(async (tab) => {
  toggle = !toggle;
  
  if (toggle) {
    await chrome.action.setIcon({path: "on.png", tabId: tab.id});
    await chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ["content.js"]
    });
  } else {
    await chrome.action.setIcon({path: "off.png", tabId: tab.id});
    await chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ["stop.js"]
    });
  }
});
