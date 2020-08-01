import React from 'react';
import './SortingVisualizer.css';
import {mergeSortAnimations} from '../SortingAlgorithms/MergeSort.js';
import {bubbleSortAnimations} from '../SortingAlgorithms/BubbleSort.js';
import {quickSortAnimations} from '../SortingAlgorithms/QuickSort.js';

const ANIMATION_SPEED_PER_MS = 10;
const ARRAY_BAR_NUMBER = 100;
const COMPARE_COLOR = 'red';
const FINISH_COLOR = 'teal';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        array: [],
      };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < ARRAY_BAR_NUMBER; i++) {
          array.push(randomIntFromInterval(5, 480));
        }
        this.setState({array});
    }

    render() {
        const {array} = this.state;

        return (
            <div>
            <div className="intro-container">
                <p>SORTING VISUALIZER</p>
            </div>
            <div className="array-container">
                <div className="button-area">
                <button className="primary-btn" onClick={() => this.resetArray()}>New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                </div>
                {array.map((value, idx) => (
                    <div className="array-bar" 
                        key={idx} 
                        style={{height: `${value}px`,}}>
                    </div>
                ))}
            </div>
            </div>
        );
    }

    mergeSort() {
        const animations = mergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const colorChange = i % 3 !== 2;
        if (colorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? COMPARE_COLOR : FINISH_COLOR;
            setTimeout(() => {
                barOneStyle.background = color;
                barTwoStyle.background = color;
            }, i * ANIMATION_SPEED_PER_MS);
        } else {
            setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_PER_MS);
        }
    }
  }

    bubbleSort(){
        const [animations] = bubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const ColorChange = animations[i][0] === "compare1" || animations[i][0] === "compare2";
            const arrayBars = document.getElementsByClassName('array-bar');
            if (ColorChange) {
                const color = (animations[i][0] === "compare1") ? COMPARE_COLOR : FINISH_COLOR;
                const [, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.background = color;
                    barTwoStyle.background = color;
                }, i * ANIMATION_SPEED_PER_MS);
            }
            else {
                const [, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_PER_MS);  
            }
        }
    }

    quickSort(){
        const [animations] = quickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const ColorChange = animations[i][0] === "compare1" || animations[i][0] === "compare2";
            const arrayBars = document.getElementsByClassName('array-bar');
            if (ColorChange) {
                const color = (animations[i][0] === "compare1") ? COMPARE_COLOR : FINISH_COLOR;
                const [, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.background = color;
                    barTwoStyle.background = color;
                }, i * 50);
            }
            else {
                const [, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * 50);  
            }
        }
    }

    heapSort(){/*const javaScriptSortedArray = this.state.array.slice().sort((a, b) => a - b);
        const bubbleSortArray = SortingAlgorithms.bubbleSortAnimations(this.state.array);
        console.log(equalArrays(javaScriptSortedArray, bubbleSortArray));*/}
}

// Taken from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function equalArrays(array1, array2) {
    if (array1.length !== array2.length) return false;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
        return false;
        }
    }
    return true;
}