import { CreateContainer, Header, MainContainer } from "./components";
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItem } from "./utils/firebaseFunction";
import { useEffect } from "react";
import { actionType } from "./context/reducer";
function App() {
  const [{foodItems},dispatch] = useStateValue();

  const fetchData = async()=>{
    await getAllFoodItem().then((data)=>{
      dispatch({
        type:actionType.SET_FOOD_ITEMS,
        foodItems:data
      })
    })
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen bg-primary h-auto flex flex-col">
        <Header />
        <div className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
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
