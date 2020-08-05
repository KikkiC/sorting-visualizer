// Original bubbleSort function with animations [TEST]
/* export function bubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) {
        return array;
    }
    const auxiliaryArray = array.slice();
    bubbleSort(auxiliaryArray, animations);
    array = auxiliaryArray;
    return [animations, array];
}

function bubbleSort(auxiliaryArray, animations) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < auxiliaryArray.length; i++) {
            animations.push(["comparison1", i, i+1]);
            animations.push(["comparison2", i, i+1]);
            if (auxiliaryArray[i] > auxiliaryArray[i + 1]) {
                animations.push(["swap", i, auxiliaryArray[i+1]]);
                animations.push(["swap", i+1, auxiliaryArray[i]]);
                let temp = auxiliaryArray[i];
                auxiliaryArray[i] = auxiliaryArray[i + 1];
                auxiliaryArray[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
} */

export function bubbleSortAnimations(array) {
  let animations  = [];
  let auxiliaryArray = array.slice();
//  let comparisons = 0;
  bubbleSort(auxiliaryArray, animations);

  array = auxiliaryArray;
  return [animations, array];
}

function bubbleSort(auxiliaryArray, animations) {
  let innerloop = auxiliaryArray.length - 1;
  while(innerloop > 0) {
      let swapped = false;
      for(let i = 0; i < auxiliaryArray.length-1; ++i) {
//          comparisons++;
          animations.push(["compare1", i, i + 1]);
          animations.push(["compare2", i, i + 1]);
          if(auxiliaryArray[i] > auxiliaryArray[i + 1]) {
//              comparisons++;
              animations.push(["swap", i, auxiliaryArray[i + 1]]);
              animations.push(["swap", i + 1, auxiliaryArray[i]]);
              swapped = true;
              let temp = auxiliaryArray[i];
              auxiliaryArray[i] = auxiliaryArray[i+1];
              auxiliaryArray[i+1] = temp;
          }
      }
      // pushes largest value at the end of the array
      if(swapped === false) break;
      innerloop--;
  }
}