# Unexpected Behavior in Subtraction Function Due to Lack of Input Validation

This repository demonstrates a common JavaScript error: unexpected behavior in a simple subtraction function due to a lack of input validation. The function `myFunction` subtracts two numbers. However, it does not handle cases where the inputs are not numbers, leading to potential errors and unexpected results. The solution demonstrates how to add input validation to prevent these errors.

## Bug

The bug lies in the absence of input validation. If non-numeric values are passed as arguments, the function will still attempt to perform subtraction, resulting in either `NaN` (Not a Number) or an unexpected result. 

## Solution

The solution adds input validation to ensure that both inputs are numbers before performing the subtraction. If either input is not a number, it returns an appropriate error message. This ensures that the function behaves as expected in all cases.