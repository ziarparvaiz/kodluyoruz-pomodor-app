

 export const initialState = {
    todos: []
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "ADD_TODO":
        return {
           ...state,
           todos: [action.payload, ...state.todos]
           //böylece en son eklenen todo en yukarıda gösterilmiş oldu.
        };
        case "REMOVE_TODO":
            return {
               ...state,
               todos: [...state.todos].filter(todo => todo.id !== action.payload)
               //varsayılan statein kopyası üzerinden filter metodu ile
               //gönderilen id ile statetteki id den farklı olanları listele dedik.
               //bu sayede silme işlemi gerçekleştirildi.
               //filter metodu pure fonk olmayı engellediği için kopya aldık
            };
            case "COMPLETE_TODO":
            return {
               ...state,
               todos: state.todos.map((todo) => {
                   if(todo.id !== action.payload) {
                    return  todo;
                   }
                   else {
                       return {
                           ...todo,
                           isCompleted: !todo.isCompleted, 
                           //varsayılan todoyu her seferinde tersini alır eğer tamamlandıysa
                       }
                   }
               })
               
            };
            case "UPDATE_TODO":
                return {
                   ...state,
                   todos: state.todos.map((todo) => {
                       if(todo.id !== action.payload.todoId) {
                        return todo;
                       }
                        return {
                            ...todo,
                            content: action.payload.newValue
                            //varsayılan todoyu her seferinde tersini alır eğer tamamlandıysa
                        }
                   })
                };
        
        default:
            return {
                ...state,
            };
    }
}

export default reducer;
