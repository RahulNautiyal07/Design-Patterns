const worker = new Worker('worker.js');  //I have passed the worker file name inside the Worker constructor
const sumButton = document.querySelector("#sumButton");
const bgButton = document.querySelector("#bgButton");

sumButton.addEventListener("click",function(event){
    // let sum = 0;
    // for(let i = 0; i< 1000000000; i++){  // CPU intensive work.
    //     sum += i;
    // }
    // alert(`The final sum is : ${sum}`);
    worker.postMessage('Hello Worker')
})

worker.onmessage = function(message){
console.log(message)
alert(`The final sum is : ${message.data}`);
}
// This is a lengthy and time taking process, It will take time to compute and execute.
// It will block other process and events till it will be done.
// After completing this event other will execute.


bgButton.addEventListener("click", event => {
    // alert("Hello")
    if(document.body.style.background !== "green")
        document.body.style.background = "green";
    else
        document.body.style.background = "blue";    
});