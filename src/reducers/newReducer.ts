const newReducer=(
    state:any={users:[], user:null, loading:false, error:false},
    action:any
)=>{
    switch(action.type){
        case "FETCHING_USER":
            return{...state,loading:true,error:false};
        case "FETCHED_SUCCESS":
            return{...state,loading:false, error:false, users:[...action.payload]}
        case "FETCHING_FAILED":
            return{...state,loading:false, error:true}
        case "DELETE_USER":
            return{...state,users:[...state.users].filter(f => f._id !== action.payload)}
        case "UPDATE_USER":
            return{...state,users:[...state.users].map(obj => obj._id === action.editedId ? action.payload.data : obj)}
        default:
            return state;
    }
}

export default newReducer;