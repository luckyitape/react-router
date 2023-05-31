// 引入两个组件
import Home from './Home'
import About from './About'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
// 进行路由配置
function App() {
  return (
    //声明当前要用一个非hash模式的路由
    <BrowserRouter>
       {/** 指定跳转的组件 to用来配置路由的地址 */}
       <Link to="/">首页</Link>
       <Link to="/about">关于</Link>
       {/** 路由的出口，路由对应的组件会在这里渲染 */}
       <Routes>
       {/** 指定的路径和组件对应的关系path代表路径，element代表组件  成对出现  path -> element*/}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
       </Routes>

    </BrowserRouter>
  );
}

export default App;
