import { CreateContainer, Header, MainContainer } from "./components";
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
function App() {
  return (
    <AnimatePresence>
      <div className="w-screen bg-primary h-auto flex flex-col">
        <Header />
        <div className="mt-24 p-8 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
