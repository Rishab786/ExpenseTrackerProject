console.log('person1 shows ticket');
console.log('person2 shows ticket');
const buyingTicket=function(){
    return new Promise(function(resolve,reject){
       setTimeout(function(){
        console.log(`got the tickets`);
       resolve("Tickets purchased");
        },2000)
        

    })
}
const buyingPopcorn=function(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log(`Husband: here is popcorn`);
            console.log(`Wife: "I dont like popcorn without butter!"`);
            resolve("Popcorn added");
        },3000)
       

    })
}
const buyingButter=function(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
        console.log(`Husband: here is your butter`);
	    console.log(`Husband:Anything else darling`);
        console.log(`Wife:i want colddrink also`);
        resolve("Butter added");
        },2000)

    })
}
const buyingColddrink=function(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
        console.log(`Husband: here is your colddrink`);
	    console.log(`Wife:thankyou darling`);
        console.log(`Wife:let's go..`);
        resolve("ColdDrink added");
        },1000)

    })
}
buyingTicket()
.then(function(value){
    console.log("Ticket Status:",value)
    console.log(`Husband:we should go in now`);
    console.log(`Wife: "i am hungry"`);
    return buyingPopcorn();
})
.then(function(){
    return buyingButter();
})
.then(function(){
    buyingColddrink();
})