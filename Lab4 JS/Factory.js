//------------------------------ Using Factory Functions -----------------------------

let personFactory = (name, money, sleepMood, healthRate) => {
    let sleep = function(hours) 
    {
      if (hours == 7) 
      {
        this.sleepMood = 'Happy';
      } 
      else if (hours < 7) 
      {
        this.sleepMood = 'Tired';
      } 
      else 
      {
        this.sleepMood = 'Lazy';
      }
    };
  
    let eat = function(meals) 
    {
      if (meals === 3) 
      {
        this.healthRate = 100;
      } 
      else if (meals === 2) 
      {
        this.healthRate = 75;
      } 
      else if (meals === 1) 
      {
        this.healthRate = 50;
      }
    };
  
    let buy = function(items) 
    {
      this.money -= items * 10;
    };
  
    return { fullName: name, money, sleepMood, healthRate, sleep, eat, buy, };
};
  

let person3 = personFactory('Mohamed', 120, 'Happy', 85);
  person3.sleep(7);
  person3.eat(1);
  person3.buy(4);
  console.log(person3);
  
//------------------------------------------------------------------------------------