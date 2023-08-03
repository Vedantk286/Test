export const incData = (data) =>{
  
    return ((dispatch)=>{
        dispatch({
            type:"add",
            payload: data
        });
    })
}
export const decData = (data) =>{
  
    return ((dispatch)=>{
        dispatch({
            type:"remove",
            payload: data
        });
    })
}
export const adCart=(data)=>{
    return ((dispatch)=>{
        dispatch({
            type:"cartName",
            payload: data
        });
    });
}
export const resetCart = ()=>{
    return ((dispatch)=>{
        dispatch({
            type:"reset",
            
        });
    });
}
export const itemTotal=(data)=>{
    return (dispatch) =>{
        dispatch({
            type:"itemT",
            payload: data
        });
    }
}

