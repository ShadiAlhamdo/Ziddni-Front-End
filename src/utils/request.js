import axios from "axios";

const request=axios.create({
    baseURL:"https://ziddni-back-end.vercel.app"
});

export default request;