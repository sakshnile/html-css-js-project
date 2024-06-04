function clearDisplay()
{
    document.calculator.display.value = '';
}

function deleteLast()
{
    let currentDisplay = document.calculator.display.value;
    document.calculator.display.value = currentDisplay.slice(0,-1);
}

function appendCharacter(character)
{
    document.calculator.display.value += character;
}

function calculateResult()
{
    try
       {
           let result = eval(document.calculator.display.value);
           document.calculator.display.value = result;
       }
    catch(error)
         {
            document.calculator.display.value = 'Error';
         }
}
