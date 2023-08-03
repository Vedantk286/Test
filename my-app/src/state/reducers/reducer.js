// import action from '../actionCreator/actions';
const initialState=[];
 const reducerr= (state=initialState,action)=>{
     if(action.type==="cartName"){
        console.log("cartname is run");
        return [...state,...action.payload];
    
    }else if(action.type==="add"){
        
        const newState=[...state];
       
        newState[action.payload].quantity+=1;
       
        return newState;
        
    }else if(action.type==="remove"){
        console.log(state[action.payload].quantity)
        if(state[action.payload].quantity===1){
            alert("Item can't be 0");
            return state;
        }else{
            const newState=[...state];
            newState[action.payload].quantity-=1;
            return newState;
        }
        

    }else if(action.type==="reset"){

        return initialState;
    }else if(action.type==="itemT"){
        console.log(state[action.payload].quantity)
        console.log(state[action.payload].price)
        const newState=[...state];
        newState[action.payload].total=newState[action.payload].quantity*newState[action.payload].price;
        return newState;

    }else{
        return state;
    }
}


export {reducerr};
