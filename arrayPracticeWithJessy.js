let destinations = [
    ['newyork','buffalo','rochester'],
    ['canada','toronto','vancouver'],
    ['england','london','manchaster']
];
 let flight = 'london';
for(let i = 0; i < destinations.length; i++)
{
    for(let j = 0; j < destinations[i].length; j++)
    {
        console.log(destinations[i][j]);
        if(destinations[i][j]== flight)
        {
            console.log('I found londons flight');


        }
    }
}

/*
matrix practice
*/

let matrix = [
    [1,2,'#'],
    [8,'#',32],
    [64,'#',256]
];
let counter = 0;
    for(let i = 0; i < matrix.length; i++)
    {
        for(let j = 0; j < matrix[i].length; j++)
        {
            if(matrix[i][j] == '#')
            {
                matrix[i][j] = 2 ** counter;
            }
            counter++;
        }
    }
    console.log(matrix);
    