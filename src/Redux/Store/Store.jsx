import { configureStore } from "@reduxjs/toolkit";
import { Api } from "../Silces/ProductSlice";

const Store = configureStore({
    reducer : {
        Products : Api.reducer
    }
})
export default Store