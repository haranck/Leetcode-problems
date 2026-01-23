/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let arr = [];

    for (let i = 0; i < operations.length; i++) {
        let op = operations[i];

        if (op === "+") {
            let n1 = arr[arr.length - 1];
            let n2 = arr[arr.length - 2];
            arr.push(n1 + n2);
        } 
        else if (op === "D") {
            arr.push(arr[arr.length - 1] * 2);
        } 
        else if (op === "C") {
            arr.pop();
        } 
        else {
            arr.push(Number(op));
        }
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
};
