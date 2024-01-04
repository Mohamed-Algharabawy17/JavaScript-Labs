//--------------------------------- Using Classes ------------------------------------

class Person 
{
    constructor(name, money, sleepMood, healthRate) 
    {
      this.fullName = name;
      this.money = money;
      this.sleepMood = sleepMood;
      this.healthRate = healthRate;
    }
  
    sleep(hours) 
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
    }
  
    eat(meals) 
    {
      if (meals == 3) 
      {
        this.healthRate = 100;
      } 
      else if (meals == 2) 
      {
        this.healthRate = 75;
      } 
      else if (meals == 1) 
      {
        this.healthRate = 50;
      }
    }
  
    buy(items) 
    {
      this.money -= items * 10;
    }
  }
  

  let person2 = new Person('Mohamed', 150, 'Happy', 90);
  person2.sleep(6);
  person2.eat(2);
  person2.buy(1);
  console.log(person2);

//------------------------------------------------------------------------------------

