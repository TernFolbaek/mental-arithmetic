interface MathExpression {
    question: string;
    answer: number;
}
  
const getRandomInt = (min: number, max: number): number => {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateEasyAddition = (): MathExpression => {
    const num1 = getRandomInt(1, 10);
    const num2 = getRandomInt(1, 10);
    const question = `${num1} + ${num2}`;
    const answer = num1 + num2;
    return { question, answer };
};

export const generateHardAddition = (): MathExpression => {
    const num1 = getRandomInt(1, 20);
    const num2 = getRandomInt(1, 20);
    const num3 = getRandomInt(1, 20);
    const question = `${num1} + ${num2} + ${num3}`;
    const answer = num1 + num2 + num3;
    return { question, answer };
};
  
export const generateEasyMultiplication = (): MathExpression => {
    const num1 = getRandomInt(1, 20);
    const num2 = getRandomInt(1, 20);
    const question = `${num1} · ${num2}`;
    const answer = num1 * num2;

    return { question, answer };
};

export const generateHardMultiplication = (): MathExpression => {
    const num1 = getRandomInt(1, 20);
    const num2 = getRandomInt(1, 20);
    const num3 = getRandomInt(1, 20);
    const question = `${num1} · ${num2} · ${num3}`;
    const answer = num1 * num2 * num3;
    console.log(answer)

    return { question, answer };
};
  
export const generateEasyDivision= (): MathExpression => {
    const num1 = getRandomInt(1, 10);
    const num2 = getRandomInt(1, 10);
    const question = `${num1} / ${num2}`;
    const answer = num1 / num2;
    return { question, answer };
};

export const generateHarDivision = (): MathExpression => {
    const num1 = getRandomInt(1, 20);
    const num2 = getRandomInt(1, 20);
    const num3 = getRandomInt(1, 20);
    const question = `${num1} + ${num2} + ${num3}`;
    const answer = num1 + num2 + num3;
    return { question, answer };
};
  
export const generateEasySubtraction = (): MathExpression => {
    const num1 = getRandomInt(1, 10);
    const num2 = getRandomInt(1, 10);
    const question = `${num1} - ${num2}`;
    const answer = num1 - num2;
    return { question, answer };
};

export const generateHardSubtraction = (): MathExpression => {
    const num1 = getRandomInt(1, 20);
    const num2 = getRandomInt(1, 20);
    const num3 = getRandomInt(1, 20);
    const question = `${num1}  - ${num2} - ${num3}`;
    const answer = num1 - num2 - num3;
    return { question, answer };
};
  
  