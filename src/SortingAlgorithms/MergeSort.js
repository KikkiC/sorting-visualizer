// Original mergeSort function without animations
/*export const mergeSort = array => {
    if (array.length === 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const firstHalf = array.slice(0, middle);
    const secondHalf = array.slice(middle);
    return merge(
        mergeSort(firstHalf), mergeSort(secondHalf)
    );
}
function merge(firstHalf, secondHalf) {
    let result = [], leftIndex = 0, rightIndex = 0;
    while (leftIndex < firstHalf.length && rightIndex < secondHalf.length) {
        if (firstHalf[leftIndex] < secondHalf[rightIndex]) {
            result.push(firstHalf[leftIndex]);
            leftIndex++;
        } else {
            result.push(secondHalf[rightIndex]);
            rightIndex++;
        }
    }
    return result
        .concat(firstHalf.slice(leftIndex))
        .concat(secondHalf.slice(rightIndex));
}*/

export function mergeSortAnimations(array) {
  let animations = [];
  let auxiliaryArray = array.slice();
  if (array.length <= 1) {
      return array;
  }

  mergeSort(array, 0, array.length - 1, auxiliaryArray, animations);
  array = animations;
  return array;
}

function mergeSort(mainArray, startIndex, endIndex, auxiliaryArray, animations) {
  if (startIndex === endIndex) return;
  const midIndex = Math.floor((startIndex + endIndex) / 2);
  // Continue dividing the mainArray into single elements
  mergeSort(auxiliaryArray, startIndex, midIndex, mainArray, animations);
  mergeSort(auxiliaryArray, midIndex + 1, endIndex, mainArray, animations);
  mergeElements(mainArray, startIndex, midIndex, endIndex, auxiliaryArray, animations);
}

function mergeElements(mainArray, startIndex, midIndex, endIndex, auxiliaryArray, animations) {
  let k = startIndex, i = startIndex, j = midIndex + 1;
  while (i <= midIndex && j <= endIndex) {
    // Colour change for the comparing values
    animations.push([i, j]);
    // Revert colour change for comparing values
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // Overwrite value at index k in mainArray with value at index i from the auxiliary array
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // Overwrite value at index k in mainArray with value at index j from the auxiliary array
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= midIndex) {
    // Colour change for the comparing values
    animations.push([i, i]);
    // Revert colour change for comparing values
    animations.push([i, i]);
    // Overwrite value at index k in mainArray with value at index i from the auxiliary array
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIndex) {
    // Colour change for the comparing values
    animations.push([j, j]);
    // Revert colour change for comparing values
    animations.push([j, j]);
    // Overwrite value at index k in mainArray with value at index j from the auxiliary array
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}