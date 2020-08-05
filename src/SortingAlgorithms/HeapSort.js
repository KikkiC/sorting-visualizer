// Original heapSort function without animations
/* export const heapSort = array => {
    let i = Math.floor((array.length / 2) - 1);
    let k = array.length - 1;
    while (i >= 0) {
        createHeap(array, array.length, i);
        i--;
    }
    while (k >= 0) {
        swap(array, 0, k);
        createHeap(array, k, 0);
        k--;
    }
    return array;
}

function createHeap(array, length, i) {
    let largest = i, left = 2 * i + 1, right = 2 * i + 2;
    if (left < length && array[left] > array[largest]) {
        largest = left;
    }
    if (right < length && array[right] > array[largest]) {
        largest = right;
    }
    if (largest !== i) {
        swap(array, i, largest);
        createHeap(array, length, largest);
    }
    return array;
}

function swap(array, firstIdx, secondIdx) {
    let temp = array[firstIdx];
    array[firstIdx] = array[secondIdx];
    array[secondIdx] = temp;
} */

// TODO: add animations
/* export function heapSortAnimations(array) {
    let animations = [];
    let auxiliaryArray = array.slice();
    heapSort(auxiliaryArray, animations);

    array = auxiliaryArray;
    return [animations, array];
}

function heapSort(auxiliaryArray, animations) {
    let i = Math.floor((auxiliaryArray.length / 2) - 1);
    let k = auxiliaryArray.length - 1;
    while (i >= 0) {
        createHeap(auxiliaryArray, auxiliaryArray.length, i, animations);
        i--;
    }
    while (k >= 0) {
        swap(auxiliaryArray, 0, k);
        createHeap(auxiliaryArray, k, 0);
        k--;
    }
    return auxiliaryArray;
}

function createHeap(auxiliaryArray, length, parent, animations) {
    var largest = parent, left = 2 * parent + 1, right = 2 * parent + 2;
    if (left < length && auxiliaryArray[left] > auxiliaryArray[largest]) {
        largest = left;
    }
    if (right < length && auxiliaryArray[right] > auxiliaryArray[largest]) {
        largest = right;
    }
    if (largest !== parent) {
        swap(auxiliaryArray, parent, largest);
        createHeap(auxiliaryArray, length, largest, animations);
    }
    return auxiliaryArray;
}

function swap(array, firstIdx, secondIdx) {
    let temp = array[firstIdx];
    array[firstIdx] = array[secondIdx];
    array[secondIdx] = temp;
} */