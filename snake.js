//🐍🐍文件
import { getInputDirection } from './input.js'

//设定蛇的速度,蛇的身体,蛇增加的量(蛇的属性)
export const SNAKE_SPEED = 5;
const snakeBody = [{ x: 11, y: 11 }]
let newSegments = 0

//🐍🐍的刷新函数
export function update() {
    //吃到食物要增加
    addSegments()

    //操纵🐍🐍
    const inputDirection = getInputDirection();

    //🐍🐍身体增加
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    //🐍🐍移动
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

//绘制🐍🐍
export function draw(gameBoard) {
    //forEach函数绘制身体
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}

//身体增加
export function expandSnake(amount) {
    newSegments += amount
}

//设定吃到时的动作
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

//判断撞墙条件
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

//吃到食物要增加函数
function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        //push方法往🐍🐍里面加上长度
        //...扩展运算符把吃到的食物加到snakeBody.JSON里面
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
    // 吃到食物增加后,把增加部分复原
    newSegments = 0;
}


//获取🐍头
export function getSnakeHead() {
    return snakeBody[0]
}

//🐍吃到自己
export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}