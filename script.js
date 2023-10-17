const script = document.createElement('script');
script.src = chrome.runtime.getURL('embed.js');
document.head.appendChild(script);