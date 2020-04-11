import React, { Component } from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/covid-19.png';

class App extends Component {
	state = {
		data: {},
		country: ''
	}

	async componentDidMount() {
		const fetchedData = await fetchData();

		this.setState({ data: fetchedData });
	}

	handleCountryChange = async (country) => {
		// fethc
		const fetchedData = await fetchData(country);
		// set
		this.setState({ data: fetchedData, country: country });
	}

	render() { 
		const { data, country } = this.state;
		return ( 
			<div className={styles.container}>
				<img src={coronaImage} className={styles.image} alt="covid-19"></img>
				<Cards data={data}/>
				<CountryPicker handleCountryChange={this.handleCountryChange}/>
				<Chart data={data} country={country}/>
				<Footer />
			</div>
		 );
	}
}
 
export default App;
