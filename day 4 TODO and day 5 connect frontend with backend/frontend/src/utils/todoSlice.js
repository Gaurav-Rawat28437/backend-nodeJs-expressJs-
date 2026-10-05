import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const todothunk=createAsyncThunk("/get-todo",async()=>{
        
    const res=await fetch(`${import.meta.env.VITE_BACKEND}/todo`)
    const data=await res.json()
    return data
    
})

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        loading:false,
        data:[],
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(todothunk.pending,(state,action)=>{
            return{
                ...state,
                loading:true
            }
            
        })
        .addCase(todothunk.fulfilled,(state,action)=>{
            return{
                ...state,
                loading:false,
                data:action.payload
            }
            
        })
        .addCase(todothunk.rejected,(state,action)=>{
            return{
                ...state,
                loading:false,
                error:action.payload
            }
            
        })
    }
})

export default todoSlice.reducer