chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("Block this link:", details.url)
        return {cancel: true}
    },
    {urls: blocked_sites_v2},
    ["blocking"]
)