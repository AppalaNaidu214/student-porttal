import { store } from "../store"

const initialData = [
    {
        id: 111,
        name: "Aaa",
        batch: 1,
        email: "atul123@abilioit.com",
        age: 28
    },
    {
        id: 222,
        name: "bbb",
        batch: 1,
        email: "atul456@abilioit.com",
        age: 28
    },    {
        id: 333,
        name: "ccc",
        batch: 1,
        email: "atul789@abilioit.com",
        age: 28
    }
]


function addStuReducer(state = initialData, action) {
    if (action.type == "ADD_STUDENT") {
        state.push(action.payload)
    } else if (action.type == "DELETE_STUDENT") {
        const newfillter = state.filter((val) => {
            return val.id != action.payload
        })
        state = [...newfillter]
    }
    else if(action.type=="EDIT_STUDENT"){
        console.log(state)
        const filterArr=state.filter((values)=>{
            return values.id !=action.payload.id
        })
        filterArr.push(action.payload)
        console.log(filterArr)
        state=[...filterArr]
    }
    return state
}



export default addStuReducer