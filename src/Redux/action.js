export const addStudent = (data) =>{
    return {
        type:"ADD_STUDENT",
        payload : data
    }
}

export const favStudent = (data) =>{
    return {
        type:"FAV_STUDENT",
        payload : data
    }
}

export const deleteStudent = (id) =>{
    console.log(id)
    return {
        type:"DELETE_STUDENT",
        payload : id
    }
}
export const editStudent = (data) =>{
    console.log(data)
    return {
        type:"EDIT_STUDENT",
        payload : data
    }
}