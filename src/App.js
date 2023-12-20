import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main'
import Detail from './Detail'
import NotFound from './NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// react-router-dom@5.3.0 버전은 주소를 변경해도 화면을 렌더링 하지 못하기에 6.3.0으로 업그레이드