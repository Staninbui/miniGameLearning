//游戏控制文件

//设定控制坐标,包括输入的坐标与上次输入的坐标(为了应对吃到自己的时候)
let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

//为窗口添加键盘监听事件
window.addEventListener('keydown', e => {
    switch (e.key) {
        //设定上下左右案件各自的行为
        case 'ArrowUp':
            //案件为上时,不能上下移动
            if (lastInputDirection.y !== 0) break
            //移动几格
            inputDirection = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 };
            break;
    }
})

//开放一个操作的口子给其他文件调用
export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}