/**
 *  01 jsx 当中可以将数组中的数据解构
 *
 *
 */

// const arr = [1, 2, 3];
// const arr = [<p>1</p>, <p>2</p> , <p>3</p>];
const arr = [
  {
    id:1,
    name: "阿狸",
    age: 2,
    hobby: "吃鱼",
  },
  {
    id:2,
    name: "Annie",
    age: 26,
    hobby: "摸鱼给阿狸吃",
  },
];

function App() {
  const arrMap = arr.map((item) => {
    return <li key={item.id}>
      <span>{item.name}--</span>
      <span>{item.age}--</span>
      <span>{item.hobby}</span>
    </li>
  });
  return <ul>{arrMap}</ul>;
}

export default App;
