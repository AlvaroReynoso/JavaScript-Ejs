// Un script que escriba los números del 1 al 500, que indique cuáles son
// múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5
// ————————————————————
// 6
// 7// 

for(let i=1;i<=500;i++)
{
    if(i%4==0)
    {
        document.write(`${i} (multiplo de 4)`)
    }
    else if(i%9==0){
        document.write(`${i} (multiplo de 9)`)
    }
    else{
        document.write(`${i}`)
    }
    if(i%5==0)
    {
        document.write("<hr>")
    }
    document.write("<br>")
}