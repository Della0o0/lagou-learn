/**
 * 01 JSX 可以看作JS语言的扩展，它既不是一个字符串也不是一个HTML
 * 02 它具备了JS所有的功能，同时还可以被转为HTML再界面上进行展示（react react-dom）
 * 03 JSX 它本身就是一个表达式
 * 04 JSX 添加属性
 * 05 JSX 添加子元素
 * 
 * 
 * 功能：
 *  - 动态显示数据 {}
 *  - 调用方法：自定义方法 + 语言内置
 *  - 支持表达式，支持三元表达式 (不能if else)
 *  - 模板字符串
 *    ——字符串属性，直接双引号包裹
 *    ——动态属性
 * 
 */
const name = "Annie";

const flag = true;

const me = {
  name: "Annie",
  age: 18,
};

const name1 = <div>Annie</div>

function sayHello() {
  return "你好";
}

function App() {
  return (
    <div>
      <p>{name}</p>
      <p>name</p>
      <p>{sayHello()}</p>
      <p>{console.log("打印")}</p>
      <p>{Math.random()}</p>
      <p>{3 + 2}</p>
      <p>{flag ? "已登录" : "未登录"}</p>
      <p>{`你好，${name}`}</p>
      <p>{/* 这里是注释 */}123</p>
      <p>{JSON.stringify(me)}</p>
      <p title="自定义属性">{JSON.stringify(me)}</p>
      <p title={name}>{JSON.stringify(me)}</p>
      <img src="" alt="" /> 
      {name1}

    </div>
  );
}

export default App;
