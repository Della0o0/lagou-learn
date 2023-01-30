import Radium from "radium";
/**
 * 一、内联样式
 *  1、设置样式的时候应该将键值对放置于 {} 中
 *  2、 内联样式默认无法支持伪类及媒体查询样式设置
 *  3、 借助工具包可以实现 radium
 *    a 导入 Radium 函数将当前需要支持伪类操作的组件包裹之后再导出
 *
 *
 */

const styleObj = {
  color: "red",
  backgroundColor: "green",
  ":hover": { backgroundColor: "skyBlue" },
  "@media (max-width:1000px)": { backgroundColor: "red", height: "200px" },
};

const ButtonStyle = {
  base: {
    width: 150,
    height: 40,
    fontSize: 20,
    backgroundColor: "#ffffff",
  },
  login: {
    backgroundColor: "green",
  },
  logout: {
    backgroundColor: "orange",
  },
};

const isLogin = false;

function App() {
  // return <div style={{color:'red'}}>样式处理</div>;
  // return <div style={styleObj}>样式处理</div>;
  return (
    <div>
      <button
        style={[
          ButtonStyle.base,
          isLogin ? ButtonStyle.login : ButtonStyle.logout,
        ]}
      >
        登录
      </button>
    </div>
  );
}
// 伪类不能直接设置，需要用Radium将App包裹
export default Radium(App);
