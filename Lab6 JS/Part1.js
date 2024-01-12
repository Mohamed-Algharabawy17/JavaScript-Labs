
// ============================================== Part 1 ================================================

class Shape
{
    constructor(name, sides, sideLength)
    {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter()
    {
        var result = this.sideLength * this.sides;
        console.log(`Perimeter of ${this.name} = ${result}`);
    }
}

var square = new Shape('square', 4, 5);
square.calcPerimeter();


var triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();


// ============================================== Part 2 ================================================

class Square extends Shape 
{
    constructor(sideLength) 
    {
        super("square", 4, sideLength);
    }

    calcArea() 
    {
        let area = this.sideLength * this.sideLength;
        console.log(`Area of square = ${area}`);
    }
}


var square = new Square(5);
square.calcPerimeter();
square.calcArea();

// ============================================== Part 3 ================================================

class Triple
{
    static customName = "Tripler";
    static description = "I triple any number you provide";

    static calculate (n = 1)
    {
        return (n*3);
    }

}

class SquaredTriple extends Triple
{
    static longDescription;
    static description =  "square the triple of any number you provide";

    static calcArea(n)
    {
        var result = super.calcArea(n);
        return ( result * result );
    }

}


console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18

console.log(SquaredTriple.calculate(3)); // 81
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); // 'Tripler'

// ======================================================================================================
