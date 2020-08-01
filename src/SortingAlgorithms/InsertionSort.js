// Original insertionSort function without animations
/* export const insertionSort = array => {
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
    return array;
} */

export function insertionSortAnimations(array) {
    let animations = [];
    let auxiliaryArray = array.slice();
    insertionSort(auxiliaryArray, animations);

    array = auxiliaryArray;
    return [animations, array];
}

function insertionSort(auxiliaryArray, animations) {
    for (let i = 1; i < auxiliaryArray.length; i++) {
        // Keep the current value of inserting element
        let temp = auxiliaryArray[i];
        let j = i - 1;
        // Compare the values at index i and index j
        animations.push(["compare1", i, j]);
        animations.push(["compare2", i, j]); 
        while (j >= 0 && auxiliaryArray[j] > temp) {
            // Overwrite the value with element at index j if the element 
            // at index j-1 is larger than the element of index j
            animations.push(["overwrite", j + 1, auxiliaryArray[j]]);
            auxiliaryArray[j + 1] = auxiliaryArray[j];
            if (j >= 0) {
                // Highlight the current index i comparing to index j
                animations.push(["compare1", i, j]);
                animations.push(["compare2", i, j]);
            }
            j--;
        }
        // Overwrite the first value that is larger than the temp with temp
        animations.push(["overwrite", j + 1, temp]);
        auxiliaryArray[j + 1] = temp;
    }
    return auxiliaryArray;
}