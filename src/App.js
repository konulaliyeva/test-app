import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ExampleDashboard from './ExampleDashboard';
import Login from './pages/Login/'

function App() {
  return (
    <div className="App">
      <Suspense>
        <Routes>
          <Route path='' element={<Login/>}/>
          <Route path="/dashboard" element={<ExampleDashboard />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
