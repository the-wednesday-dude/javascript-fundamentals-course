/**
 * Implement the following exercises and execute this file in a browser or
 * using node command from command line to check the solution is correct
 */

/**
 * Declare following variables:
 * cake - 'Napoleon'
 * birthDate - 1769
 *
 * Declare following constants:
 * isTasty - true
 * flavorLevel = 1000
 */
// code goes here

/**
 * Review the exercise verification code.
 * Using it as an example create 10 more exercises for declaring constants and variables.
 */
// Your own exercise goes here

/**
 * Solve your own exercises. Put your code near the solution of the first one.
 * If you try to declare some variables here the test don't pass even if the solution is correct.
 * Don't believe me - check it by yourself :-).
 * The reason is the tests are executed before the variables has been defined.
 */
// May try to solve your exercise here

// Exercise verification
expectVariable('cake', 'Napoleon');
expectVariable('birthDate', 1769);
expectVariable('isTasty', true);
expectVariable('flavorLevel', 1000);

function expectVariable(variableName, expectedValue) {
    let isNotDefined = false;
    let variableValue;

    try {
       variableValue = eval(variableName);
    } catch (e) {
        if (e instanceof ReferenceError) {
            isNotDefined = true;
        } else {
            throw e;
        }
    }

    if (isNotDefined) {
        console.error(`- You have not defined variable: ${variableName}`);
    } else if (variableValue === undefined) {
        console.error(`- Variable ${variableName} is defined but the value is not assigned.`);
    } else if (variableValue !== expectedValue) {
        console.error(`- Variable ${variableName} is defined but the value is incorrect.`);
        console.error(
            `  ` +
            `Expected: ${JSON.stringify(expectedValue)}; ` +
            `Received: ${JSON.stringify(variableValue)};`
        )
    } else if (!canVariableBeReassigned(variableName)) {
        console.error(
            `- Variable ${variableName} is defined but its value cannot be changed. ` +
            `It seems you've declared a constant instead.`
        );
    } else {
        console.log(
            `+ Good job! A variable with name ${variableName} and value ${JSON.stringify(variableValue)} is defined.`
        );
    }
}

function canVariableBeReassigned(variableName) {
    const newValue = 'test-31241243214';
    const reassignCommand = `${variableName} = "${newValue}"`;
    let canBeAssigned = true;

    try {
        eval(reassignCommand);
    } catch (e) {
        if (e instanceof TypeError) {
            canBeAssigned = false;
        } else {
            throw e;
        }
    }

    return canBeAssigned;
}
