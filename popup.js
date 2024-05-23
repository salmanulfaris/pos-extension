document.addEventListener("DOMContentLoaded", function () {
    chrome.storage.local.get('machineId').then((res) => {
        // console.log(res)
        document.getElementById("machineId").innerHTML = res.machineId;
        document.getElementById("input").value = res.machineId;
    });
});
document.getElementById("saveButton").addEventListener('click',function (){
    let new_value = document.getElementById("input").value;
    chrome.storage.local.set({machineId: new_value}).then(() => {
        console.log("Value is set");
    });

})

//   ,
// "chrome_url_overrides" : {
//   "newtab": "newtable.html"
// }

  