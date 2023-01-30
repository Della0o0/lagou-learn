/**
 * 一、事件绑定
 *  驼峰命名直接添加 = {事件监听的名称}
 *
 * 二、事件监听传参
 *  a.利用"箭头函数"内部调用事件监听的时候传递实参
 *  b.利用bind方法返回一个新的函数在事件发生时调用，此时也可以传递参数
 *
 * 三、获取事件对象
 *  - 默认情况下不需要接收参数，且直接执行事件监听，此时它的第一个参数默认就是ev
 *  - 利用箭头函数执行事件监听的时候，需要通过箭头函数将ev对象传递给事件监听函数进行使用
 *  - 利用bind方法执行时，如果有传参，那么最后一个参数默认就接收到的就是ev
 *
 */

const handler = (a, b) => {
  console.log("a,b: ", a, b);
  console.log("触发");
};
const handlerEV = (ev) => {
  console.log("ev: ", ev);
  console.log("触发");
};
// 箭头函数
const handlerEV1 = (a, ev, b) => {
  console.log('a, ev, b: ', a, ev, b);
  console.log("触发");
};
// 最后一个参数
const handlerEV2 = (a, b,ev) => {
  console.log("ev, a, b: ", ev, a, b);
  console.log("触发");
};

function App() {
  return (
    <div>
      <button onClick={handler}>按键触发事件</button>
      <button onClick={() => handler(100, 200)}>按键触发事件</button>
      <button onClick={handler.bind(null, 100, 200)}>按键触发事件</button>
      <button onClick={handlerEV}>按键触发事件</button>
      <button onClick={(ev) => handlerEV1(100, ev, 200)}>按键触发事件</button>
      <button onClick={handlerEV2.bind(null,100,200)}>按键触发事件</button>
    </div>
  );
}

export default App;
