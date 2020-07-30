//入口文件
import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

//声明常量
let lastRenderTime = 0;
let gameOver = false;
//获得DIV元素
const gameBoard = document.getElementById('game-board')

//程序入口
function main(currentTime) {
    //判断游戏继续与否
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
            //选择确定时,网页跳转到当前页面
            window.location = '/'
        }
        //选择取消时,停止运行
        return
    }

    //游戏执行循环
    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
    //循环停止条件
    if (secondSinceLastRender < 1 / SNAKE_SPEED) return
    lastRenderTime = currentTime

    //调用刷新和绘制函数
    update();
    draw();
}

//游戏执行主循环,回调自己确保每一帧都能准确渲染,不会出现bug
window.requestAnimationFrame(main);

//刷新函数内容
function update() {
    //刷新🐍
    updateSnake();
    //刷新🍜
    updateFood();
    //刷新游戏结束条件
    checkDeath();
}

function draw() {
    //确保每次都能让蛇只保持当前状态
    gameBoard.innerHTML = ''
    //绘制🐍
    drawSnake(gameBoard);
    //绘制🍜
    drawFood(gameBoard);
}

//游戏结束确认条件
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}


