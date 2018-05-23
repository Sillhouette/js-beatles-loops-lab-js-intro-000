function theBeatlesPlay(musicians, instruments){
  var combo = [];

  for(let i = 0; i < musicians.length; i++){
    combo[i] = musicians[i] + " plays " + instruments[i];
  }
  console.log(combo);
  return combo;
}

function johnLennonFacts(facts){
  let count = facts.length - 1;
  while(count > -1){
    facts[count] = facts[count] + "!!!";
    count--;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var beatleLove = [];
  var count = 0;
  do{
    beatleLove.push("I love the Beatles!");
    count += number;
  } while(count < 15);
}
