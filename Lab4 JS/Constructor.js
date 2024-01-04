//---------------------- Using Constructor functions -----------------------

function Person(name, money, sleepMood, healthRate) 
{
    this.fullName = name;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
}
  
Person.prototype.sleep = function(hours) 
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

Person.prototype.eat = function(meals) 
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
};

Person.prototype.buy = function(items) 
{
    this.money -= items * 10;
};


let person1 = new Person('Mohamed', 100, 'Happy', 80);
person1.sleep(7);
person1.eat(3);
person1.buy(2);
console.log(person1);

//------------------------------------------------------------------------------------
