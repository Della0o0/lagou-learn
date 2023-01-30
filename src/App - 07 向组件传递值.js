import About from "./About";
import Header from "./Header";

/**
 * 向组件传递数据
 * 01 在组件身上添加属性然后传递数据
 * 02 将数据统一管理，然后利用...直接传递给相应的组件
 *
 * 函数式组件 function About(props){
 *             props.xxx
 *           }
 * 函数式组件 function About({name,age}){
 *             {name}
 *             {age}
 *           }
 * 
 * 
 * 类组件    this.props.xxx
 * 
 * 类组件    const {name,age} = this.props
 *
 * 
 */

const obj = {
  name: "Ari",
  age: 3,
};

function App() {
  return (
    <div>
      {/* <Header name={"Annie"} age={18} /> */}
      <Header {...obj} />
      {/* <About name={"Annie"} age={18} /> */}
      <About {...obj} />
    </div>
  );
}

export default App;
