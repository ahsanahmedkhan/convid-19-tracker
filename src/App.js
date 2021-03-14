import React from 'react';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
    import { fetchData } from './api';

class App extends React.Component {
    state = {
        data: {},

    }


    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({ data : fetchedData });

        
    }
    render() {
        const { data } = this.state;
        
        return (
            <div>
                <Cards data={data} />
                <CountryPicker />
                <Chart /> 
            </div>
        );
    }z
}
 
export default App;