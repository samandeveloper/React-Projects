import React, { useState, useContext } from 'react'
//use useContext hook to use the state globally so we can use the state in childeren component instead of using props
const AppContext = React.createContext();   //or const AppContext = createContext() and add {createContext} in the above import

//we have to add the AppProvider in the index.js
const AppProvider = ({children}) =>{
    //states
    const [isSiderOpen,setIsSiderOpen] = useState(false)
    const [isModalOpen,setIsModalOpen] = useState(false)

    const openSidebar = () =>{
        setIsSiderOpen(true)
    }
    const closeSidebar =() =>{
        setIsSiderOpen(false)
    }
    const openModal = () =>{
        setIsModalOpen(true)
    }
    const closeModal =()=>{
        setIsModalOpen(false)
    }
    return(
        <AppContext.Provider 
        // we should pass states and functions inside the value {{}}
        value={{isSiderOpen, isModalOpen,openSidebar,closeSidebar,openModal,closeModal}}>
        {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
  export { AppContext, AppProvider };

