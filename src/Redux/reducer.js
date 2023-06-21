import { createSlice } from "@reduxjs/toolkit";

const initialState={
    arr:[]
}
const editorSlice=createSlice({
    name:'Editor',
    initialState,
    reducers:{
        setEditorContent:(state,action)=>{
            state.arr.push(action.payload)
        },
        deleteContent:(state,action)=>{
            state.arr=state.arr.filter((x)=>{
                return x.id!==action.payload
            })
        },
        editContent:(state,action)=>{
            state.arr.forEach((x)=>{
                if(x.id===action.payload){

                }
            })
        },
        editRecord:(state,action)=>{
            state.arr.forEach((x)=>{
                if(x.id===action.payload.id){
                    x.title=action.payload.title
                    x.content=action.payload.content
                }
            })
        }
    }
})

export default editorSlice.reducer
export const {setEditorContent,deleteContent,editRecord}=editorSlice.actions