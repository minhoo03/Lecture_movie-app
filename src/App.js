// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Main from './Main'
// import Detail from './Detail'

// function App() {
//   return (
//     <BrowserRouter>
//     {/* 브라우저 주소랑 React Router 연결. 
//     하지만 여러 개 Route 중 어떤 Route 를 렌더링 할 지는... 
//     제어 못함 */}
//       <Switch>
//         {/* 요청에 맞는 Route를 찾는 역할 */}
//         <Route path="/movie/:id">
//           <Detail />
//         </Route>
//           <Route exact path="/">
//             <Main />
//           </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main'
import Detail from './Detail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// react-router-dom@5.3.0 버전은 주소를 변경해도 화면을 렌더링 하지 못하기에 6.3.0으로 업그레이드