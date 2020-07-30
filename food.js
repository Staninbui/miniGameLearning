//食物文件

import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

//设定食物的属性
let food = getRandomFoodPosition()
const EXPANSION_RATE = 1

//设定食物的条件
export function update() {
    // 设定吃到食物时的行为
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
}

//怎样绘制食物
export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

//食物随机出现
function getRandomFoodPosition() {
    //新建食物坐标
    let newFoodPosition
    //当新食物的坐标为空,或者🐍吃到食物时,新食物随机出现在任意格子
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    //返回新食物坐标
    return newFoodPosition
}