import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Maddie_Timeline from './Components/Maddie_Timeline';
// import MonthlyQuizzes from './Components/MonthlyQuiz';
import MemorableMoments from './Components/TenMemorableMoments';
import Navbar from './Components/Navbar';
// import Contract from './Components/Contract';
import Home from './Components/Home/Home';



const App = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Home" exact element={<Home />} />
        <Route path="/mgift" exact element={<Home />} />
        <Route path="/Maddie" exact element={<Home/>} />
        <Route path="/Maddie/mgift" exact element={<Home/>} />
        <Route path="/Maddie/Home" exact element={<Home/>} />
        <Route path="/mgift/Home" exact element={<Home/>} />
        <Route path="/mgift/Maddie_Timeline" exact element={<Maddie_Timeline />} />
        <Route path="/Maddie_Timeline" exact element={<Maddie_Timeline />} />
        <Route path="/Timeline" exact element={<Maddie_Timeline />} />
        {/* <Route path="/Contract" exact element={<Contract />} /> */}
        <Route path="/Maddie-Timeline" exact element={<Maddie_Timeline />} />
        <Route path="/Maddie/Maddie_Timeline" exact element={<Maddie_Timeline />} />
        <Route path="/Maddie/Maddie-Timeline" exact element={<Maddie_Timeline />} />
        {/* <Route path="/Monthly-Quiz" exact element={<MonthlyQuizzes />} /> */}
        {/* <Route path="/Maddie/Monthly-Quiz" exact element={<MonthlyQuizzes />} /> */}
        <Route path="/Memorable-Moments" exact element={<MemorableMoments />} />
        <Route path="/Maddie/Memorable-Moments" exact element={<MemorableMoments />} />
        {/* <Route path="/Maddie/Monthly-Puzzle" exact element={<MonthlyPuzzle />} /> */}
        {/* <Route path="/Maddie/Valentine's Day Special" exact element={<Valentine />} /> */}
        {/* <Route path="/MemoryGame" exact element={<MemoryGame />} /> */}
        {/* <Route path="/Maddie/MemoryGame" exact element={<MemoryGame />} /> */}
        {/* <Route path="/Maddie/Contract" exact element={<Contract />} /> */}
      </Routes>
    </div>
  );
};

export default App;
