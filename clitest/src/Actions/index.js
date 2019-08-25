export const increment = (params) => {
    return {
        type : "INCREMENT",
        data: params
    }
}

export const decrement = (params) => {
    return {
        type : "DECREMENT",
        data: params
    }
}