import About from "./About";
import Header from "./Header";

/**
 * prop默认值以及类型校验
 *  一、设置默认值
 *  01 函数组件
 *   设置默认值 defaultProps
 *   About.defaultProps = {
           age:12121,
           name:'元宝'
         }
 *  
 *  02 类组件 直接定义 static defaultProps
 *  
 *  static defaultProps = {
     name: "爱宝",
     age: 7,
    };

 * 二、js是弱语言，方法内定义形参没有办法限制数据类型，使用上有方便，但是会造成传参类型不一致的问题
    方案：定义形参时明确类型，当接收到不一致的语法时，直接给出语法提示 （TypeScript）
 * 
 * 借助三方包来实现
 * 

 */

const obj = {
  name: "Ari",
  age: 2,
};

function App() {
  return (
    <div>
      {/* <Header name={"Annie"} age={18} /> */}
      {/* <Header {...obj} /> */}
      <Header />
      {/* <About name={"Annie"} age={18} /> */}
      {/* <About {...obj} /> */}
      <About />
    </div>
  );
}

export default App;
