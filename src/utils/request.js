import axios from "axios";

const request=axios.create({
    baseURL:"https://ziddni-bak-end.onrender.com"
});

export default request;