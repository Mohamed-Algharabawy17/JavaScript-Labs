function countVowels()
{
    var Sentence = prompt("Enter a string: ");
    const vowels = ['a','o','i','e','u','A','O','I','E','U'];
    var count = 0;
    var flag = 0;
    for(let i = 0; i < Sentence.length ; i++)
    {
        if(vowels.includes(Sentence[i]))
        {
            count ++;
            flag = 1;
        }
    }
    if(flag == 1)
    {
        alert(`Number of vowels is: ${count}`);
    }
    else
    {
        alert("No ay vowels in the string !");
    }
    
}

countVowels();