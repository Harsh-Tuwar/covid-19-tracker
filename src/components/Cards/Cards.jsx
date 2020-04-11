import React from 'react';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import Moment from 'react-moment';
import cx from 'classnames';


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }} ) => {
	if (!confirmed || !recovered || !deaths || !lastUpdate) {
		return 'loading...';
	}

	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify="center">
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>INFECTED</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography color="textSecondary"><Moment fromNow>{lastUpdate}</Moment></Typography>
						<Typography variant="body2">Number of Active Cases of COVID-19</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>RECOVERED</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography color="textSecondary"><Moment fromNow>{lastUpdate}</Moment></Typography>
						<Typography variant="body2">Number of Recoveries from COVID-19</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>DEATHS</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography color="textSecondary"><Moment fromNow>{lastUpdate}</Moment></Typography>
						<Typography variant="body2">Number of Deaths caused by COVID-19</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	)
};

// const GridComponent = (title, value, lastUpdate, description) => {
// 	return (
// 		<Grid item component={Card}>
// 			<CardContent>
// 				<Typography color="textSecondary" gutterBottom>{title}</Typography>
// 				<Typography variant="h5">{value}</Typography>
// 				<Typography color="textSecondary">{lastUpdate}</Typography>
// 				<Typography variant="body2">{description}</Typography>
// 			</CardContent>
// 		</Grid>
// 	);
// }

export default Cards;