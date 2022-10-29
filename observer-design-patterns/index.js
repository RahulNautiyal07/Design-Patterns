// Oberserver Dessign pattern follows the One to many dependency relationship 
// Where we have one producer and other are subscribers and others are waiting for some signals from the producers 
// Like Event Listeners

 let myName = "Rahul Nautiyal"

function Subject(){
    this.observers = [] // Array of observer functions 

    // console.log(this,"Herllo")
}

Subject.prototype = {
    subscribe: function(fn)
    {
        this.observers.push(fn)
    }, 
    unsubscribe: function(fnToRemove)
    {
        this.observers = this.observers.filter( fn =>{
            if(fn != fnToRemove){
                return fn
            }
        })
    },
    fire()
    {
       this.observers.forEach( fn => {
        fn.call();
       }) 
    }
}

const subject = new Subject()

function Observer1()
{
 console.log("Observer 1 is firing")
}

function Observer2()
{
 console.log("Observer 2 is firing")
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);
console.log(subject.observers,"All Observers")
subject.fire()



// let a = {
//     name: "Rahul Nautiyal",
//     age: 25,
//     gender : "male",
// }

// let b = a;
// b.name = "Rohit"
// console.log("This",b,a)


