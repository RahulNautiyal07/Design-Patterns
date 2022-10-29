// self.onmessage = function(message){          //worker is a global object here and self is refering to the worker it self.
//                                             // Like in browser Global object is window , here we have a worker.
// }

onmessage = function(message){          //We can use without self also 
     let sum = 0;
    for(let i = 0; i< 1000000000; i++){  // CPU intensive work.
        sum += i;
    }
    // console.log(sum);
    postMessage(sum)
}