import { createSlice } from "@reduxjs/toolkit";
import { dummy } from "../pages/Dataaa";

const initialState = {
    items: dummy
  }
  export const Slice=createSlice({
    name: 'datas',
    initialState,
    reducers:{

    }
    
  })
  export default Slice.reducer
 