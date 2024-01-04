//------------------ Using Objects Linking to Other Objects (OLOO) -------------------

let OLOO = {
    init(fullName, money, sleepMood, healthRate) 
    {
        this.fullName = fullName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
        return this;
    },

    sleep(hours) 
    {
        if (hours === 7) 
        {
            this.sleepMood = 'happy';
        } 
        else if (hours < 7) 
        {
            this.sleepMood = 'tired';
        } 
        else 
        {
            this.sleepMood = 'lazy';
        }
    },

    eat(meals) 
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
    },

    buy(items) 
    {
        this.money -= items * 10;
    },
};

let OLOO1 = Object.create(OLOO).init('Mohamed', 200, 'happy', 95);
OLOO1.sleep(7);
OLOO1.eat(2);
OLOO1.buy(3);
console.log(OLOO1);

//------------------------------------------------------------------------------------