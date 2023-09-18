function logger(kismacska) {
    /* let kismacska = 'hello' */
    console.log (kismacska)
}

logger('hello')
logger('ciao')
logger('szia')

function logTheSumTwoNumbers(x, y) { /* camelCase */
 /* let x = 1
    let y = 2 */

    console.log(x + y)
}

/* logTheSumTwoNumberssumTwoNumbers(1, 2) */

function sumTwoNumbers(x, y) {
    let sum = 0;
    /* let text = "" szoveghez*/
    sum = x + y;

    return sum;
}

logger( sumTwoNumbers(10, 5))
