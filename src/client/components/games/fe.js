import React, { useState, useEffect } from 'react';
import { generateExpression } from 'math-expression-generator';
import * as math from 'mathjs';


export const MultiplicationGame = () => {


    useEffect(() => {
        const generateProblem = () => {
            const expression = generateExpression({
                target: 100,
                length: 2
            });

            const question = expression.join(" ");
            const answer = math.evaluate(question);


        };

        generateProblem();
    }, []);

    return(
        <div>
            <h1>nice</h1>
        </div>
    );
};
