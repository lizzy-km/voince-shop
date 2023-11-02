import { configureStore } from "@reduxjs/toolkit";
import { PostApi } from "./services/API/PostApi";
import CartSlice from "./services/StateManage/CartSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [PostApi.reducerPath]: PostApi.reducer,
   

    CartSlice: CartSlice,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        PostApi.middleware,
    ),
});
