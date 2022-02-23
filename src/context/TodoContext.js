import React, {createContext, useContext, useReducer} from "react";

 export const TodoLayerContext = createContext();
 //consumer kısmı
 //createContext context oluşturmamıza yarar
 //useContext oluşturduğumuz contexti kullanmamıza yarar

 export const TodoLayer = ({initialState, reducer, children}) => ( //provider kısmı
    //burada contextin kendisine ait statei tutulur
     <TodoLayerContext.Provider value={useReducer(reducer, initialState)}> 
     {/* burada bir Provider oluşturduk*/}
          {children}
     </TodoLayerContext.Provider>
    
 )

 export const useTodoLayerValue = () => useContext(TodoLayerContext);
