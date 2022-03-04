let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
    if (tab.url.indexOf('tldp.org') != -1) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: updateStyling,
      });
    }
  }
});

function updateStyling() {
  document.body.style.backgroundColor = 'antiquewhite';
  document.body.style.paddingInline = '40rem';
  document.body.style.lineHeight = '1.5';
  document.body.style.fontFamily = 'sans-serif';
}
