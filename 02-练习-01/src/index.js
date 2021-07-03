/* 
  index.js为入口文件
  开发环境:
      运行命令: webpack ./src/index.js -o ./bundle/index.js --mode=development
      以./src/index.js为入口文件 打包到。/bundle/built.js(可以还用node命令对打包代码运行)
  生产环境:
      运行命令: webpack ./src/index.js -o ./bundle/index.js --mode=production
*/
/* 
  总结: 
    1.webpack可以打包js/json  并不能打包css以及图片等资源
    2.生产环境会压缩代码
    3.生产环境和开发环境都会 将ES6模块化编译成浏览器能够识别的模块化

*/
// import './index.css'; 打包报错
import data from './data.json'
console.log(data)
function test(x,y) {
  return x + y;
}
console.log(test(1,2))
