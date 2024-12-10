# JavaScript Loose Comparison with null and undefined

This repository demonstrates a common JavaScript issue related to loose comparison (==) between `null` and `undefined`. The provided code snippet shows a function that attempts to handle `null` values but fails to properly handle `undefined` due to the way JavaScript treats these values.

## The Problem

JavaScript's loose comparison (`==`) does not distinguish `null` and `undefined` in the same way strict comparison (`===`) does.  This difference in behavior can lead to unexpected results.

## Solution

The provided solution uses the strict equality operator (`===`) to explicitly handle both `null` and `undefined` values ensuring correct behavior and avoids the `NaN` output.

## How to run the code
1. Clone this repository.
2. Open `bug.js` to see the original code with the error.
3. Open `bugSolution.js` to see the corrected code.
4. Run the JavaScript files in a browser's console or a Node.js environment.