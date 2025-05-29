import {configureStore} from "@reduxjs/toolkit"
import { authReducer } from "./slices/authSlice";
import { profileReducer } from "./slices/profileSlice";
import { courseReducer } from "./slices/courseSlice";
import { specializationReducer } from "./slices/specializationSlice";
import { teacherReducer } from "./slices/teacherSlice";
import { communityReducer } from "./slices/communitySlice";
import { videoReducer } from "./slices/videoSlice";
import { categoryReducer } from "./slices/categorySlice";
import { commentReducer } from "./slices/commentSlice";
import { passwordReducer } from "./slices/passwordSlice";

const store=configureStore({
    reducer:{
        auth:authReducer,
        profile:profileReducer,
        course:courseReducer,
       specialization :specializationReducer,
       teacher:teacherReducer,
       community:communityReducer,
       video:videoReducer,
       category:categoryReducer,
       comment:commentReducer,
       password:passwordReducer
    }
})

export default store;