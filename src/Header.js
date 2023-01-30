import React, { Component } from "react";

class Header extends Component {
  // 在类组件中，存在一个props 属性，外部传递进来的属性都可以通过它来访问
  static defaultProps = {
    name: "爱宝",
    age: 7,
  };

  render() {
    const { name, age } = this.props;
    return (
      // <div>Header组件内容</div>
      <div>
        {/* <p>{this.props.name}</p> */}
        {/* <p>{this.props.age}</p> */}
        <p>{name}</p>
        <p>{age}</p>
      </div>
    );
  }
}
export default Header;
