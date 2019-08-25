const counterReducer = (counterValue = 0, action) => {
    console.log("data: ", action.data);
    switch(action.type){
        case "INCREMENT":
            return counterValue + ((action.data !== null || action.data !== undefined) && action.data != 0 ? action.data : 1);
        case "DECREMENT":
            return counterValue - ((action.data !== null || action.data !== undefined) && action.data != 0 ? action.data : 1);
            default:
                return counterValue;
    }
}

export default counterReducer;