// if (window.location.host != "www.google.com") {
//     window.location.replace('https://www.google.com')
// }
// document.addEventListener("mouseover", (event) => {
//     document.documentElement.requestFullscreen();

// });


chrome.storage.local.get('machineId').then((res) => {
    // console.log(res.machineId)
    localStorage.setItem("device-id",res.machineId)
});