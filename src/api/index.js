import  axios  from "axios";

const url = 'https://covid19.mathdro.id/api';
const dailyurl = 'https://covid19.mathdro.id/api/daily';

export const fetchData = async () => {
    try {
        const { data : { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

        return { confirmed, recovered, deaths, lastUpdate, }


        
    } catch (error) {
        
    }
}

export const fetchDailyData = async () => {
    try {
        // eslint-disable-next-line no-template-curly-in-string
        const { data } = await axios.get("${url}/daily");
        

        console.log(data);
    } catch (error) {
        
    }
}