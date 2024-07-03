import axios from "axios";

async function getData() {
    const url = "";
    try {
        return await axios.get(`${url}/news`);
        // console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}

export default getData;