function fibs(fibCount = 2) {
  let fibArr = [0, 1];

  if (fibCount < 2) {
    return "Fib sequence cannot be less than 2.";
  } else {
    fibCount -= 2;
    for (let i = 0; i < fibCount; i++) {
      let lastNumber = fibArr[fibArr.length - 1];
      let nxtToLastNumber = fibArr[fibArr.length - 2];
      fibArr.push(lastNumber + nxtToLastNumber);
    }
  }

  return fibArr;
}

console.log(fibs(13));
console.log(fibsRec(13));

function fibsRec(fibCount) {
  if (fibCount <= 0) {
    return [];
  } else if (fibCount === 1) {
    return [0];
  } else if (fibCount === 2) {
    return [0, 1];
  } else {
    let prevSequence = fibsRec(fibCount - 1);
    let prevLength = prevSequence.length;
    let nextSequence =
      prevSequence[prevLength - 1] + prevSequence[prevLength - 2];
    prevSequence.push(nextSequence);
    return prevSequence;
  }
}
