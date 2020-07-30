//游戏地图文件

//声明游戏尺寸为21,grid布局下是从1开始的
const GRID_SIZE = 21

//设定随机网格位置
export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

//设定超出地图的条件
export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    )
}