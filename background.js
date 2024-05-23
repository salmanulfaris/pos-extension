chrome.runtime.onInstalled.addListener(function () {
    // Generate a unique numeric value (e.g., UUID) and store it in extension storage
    const uniqueValue = generateRandomAlphaNumericString(30);
    chrome.storage.local.get(["machineId"]).then((result) => {
        console.log(result.machineId)
        if (!result.machineId) {
            chrome.storage.local.set({machineId: uniqueValue}).then(() => {
                console.log("Value is set");
            });
        }
    });


});


function generateRandomAlphaNumericString(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset.charAt(randomIndex);
    }

    return result;
    let date = new Date();
    return "mac1234POS" + date.toDateString()
}

// var maxTabs = 20;
// var tabsCount;

// function updateTabsCount() {
//     chrome.tabs.query({
//         windowType: 'normal',
//         pinned: false
//     }, function (tabs) {
//         tabsCount = tabs.length;
//     });
// }


// function handleTabCreated(tab) {
//     console.log(tab);
//     if (tabsCount >= maxTabs) {
//         chrome.tabs.remove(tab.id);
//     }
//     else {
//         updateTabsCount();
//     }
// }


// function handleTabRemoved(tab) {
//     updateTabsCount();
// }

// function handleTabUpdated(tab) {
//     updateTabsCount();
// }


// function init() {
//     updateTabsCount();
//     chrome.tabs.onCreated.addListener(handleTabCreated);
//     chrome.tabs.onRemoved.addListener(handleTabRemoved);
//     chrome.tabs.onUpdated.addListener(handleTabUpdated);
// }

// init()
