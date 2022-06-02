function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
      messages.push("Thank you, " + names[i]+ "," + " for the wonderful " + event + " gift!")
    }
    return messages;
  }
  
  
  
  
  function countDown(countdown) {
  //declare and instantiate your variable
   var countdown = 10;
  
  //set up your loop that will run while your variable is greater than zero
  while (countdown >= 0) {
     //log timer to the console for debugging purposes
     console.log(countdown);
     countdown--;
     //reduce the count of timer by one over each iteration
    
  }
  }
