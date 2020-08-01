export function quickSortAnimations(array) {
    let animations = [];
    let auxiliaryArray = array.slice();
    quickSort(auxiliaryArray, 0, auxiliaryArray.length - 1, animations);

    array = auxiliaryArray;
    return [animations, array];
}

function quickSort(auxiliaryArray, startIdx, endIdx, animations) {
    if (startIdx < endIdx) {
        let pivotIdx = partition(auxiliaryArray, startIdx, endIdx, animations);
        quickSort(auxiliaryArray, startIdx, pivotIdx - 1, animations);
        quickSort(auxiliaryArray, pivotIdx + 1, endIdx, animations);
    }
}

function partition(auxiliaryArray, startIdx, endIdx, animations) {
    let pivotIdx = Math.floor(Math.random() * (endIdx - startIdx + 1) + startIdx);
    let leftPointer = startIdx;

    // Swap the position of the pivot and endIdx
    animations.push(["compare1", pivotIdx, endIdx]);
    animations.push(["swap", pivotIdx, auxiliaryArray[endIdx]]);
    animations.push(["swap", endIdx, auxiliaryArray[pivotIdx]]);
    animations.push(["compare2", pivotIdx, endIdx]);

    swap(auxiliaryArray, pivotIdx, endIdx);

    for (let i = startIdx; i < endIdx; i++) {
        animations.push(["compare1", i, endIdx]);
        animations.push(["compare2", i, endIdx]);
        if (auxiliaryArray[i] < auxiliaryArray[endIdx]) {
            animations.push(["compare1", i, leftPointer]);
            animations.push(["swap", i, auxiliaryArray[leftPointer]]);
            animations.push(["swap", leftPointer, auxiliaryArray[i]]);
            animations.push(["compare2", i, leftPointer]);
            swap(auxiliaryArray, i, leftPointer);
            leftPointer++;
        }
    }

    // Swap the pivot to the end of the array containing elements less than the pivot 
    animations.push(["compare1", leftPointer, endIdx]);
    animations.push(["swap", endIdx, auxiliaryArray[leftPointer]]);
    animations.push(["swap", leftPointer, auxiliaryArray[endIdx]]);
    animations.push(["compare2", leftPointer, endIdx]);
    
    swap(auxiliaryArray, leftPointer, endIdx);
    return leftPointer;
}

function swap(auxiliaryArray, firstIdx, secondIdx) {
    let temp = auxiliaryArray[firstIdx];
    auxiliaryArray[firstIdx] = auxiliaryArray[secondIdx];
    auxiliaryArray[secondIdx] = temp;
}