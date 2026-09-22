/**
 * 
 * @param {number} x 
 * @returns {number}
 */
function calcTargetFunc (x)
{
    return Math.pow(x, 2) - Math.cos(x);
}

const baseN = 1000;

/**
 * 
 * @param {function} func 
 * @param {number} a 
 * @param {number} b 
 * @param {number} n 
 * @returns {number}
 */
function leftRiemannSum (func, a, b, n = baseN)
{
    const dx = (b - a) / n;
    let sum = 0;
    
    for (let i = 0; i < n; i++)
    {
        const x = a + i * dx;
        sum += func(x);
    }

    return sum * dx;
}

function main()
{
    const inputA = prompt("Введите левую границу интервала (a):", "0");
    const inputB = prompt("Введите правую границу интервала (b):", "3");

    if (inputA === null || inputB === null) {
        alert("Вычисление отменено.");
        return;
    }

    const a = parseFloat(inputA);
    const b = parseFloat(inputB);

    if (isNaN(a) || isNaN(b)) {
        alert("Ошибка: введены некорректные числа!");
        return;
    }

    const result = leftRiemannSum(calcTargetFunc, a, b);

    const message = `Результат интегрирования F(x) = x² - cos(x)\n` +
                    `на отрезке [${a}, ${b}] методом левых прямоугольников (n=${baseN}):\n` +
                    `Ответ: ${result.toFixed(6)}`;

    alert(message);
    console.log(message);
}

main();