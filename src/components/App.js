import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';

import './App.scss';

import history from '../history';
import SearchHeroes from './searchHeroes/SearchHeroes';
import HeroList from './heroList/HeroList';
import HeroDetails from './heroDetails/HeroDetails';

const App = props => {
	const [load, setLoad] = useState(props.loading)

	const renderLoading = () => {
		if (load) {
			return (
				<div className="loading">
					<div className="loader"></div>
				</div>
			);
		}
	};

	useEffect(() => {
        setLoad(props.loading);
    }, [props.loading]);

	return (
    	<div className="sami">
      		<Router history={history}>
        		<div>
          			<Route path="/" exact component={SearchHeroes} />
					<Route path="/search/result" exact component={HeroList} />
					<Route path="/hero/details" exact component={HeroDetails} />
        		</div>
      		</Router>
			{renderLoading()}
    	</div>
  	);
}

const mapStateToProps = state => {
    return { loading: state.loading };
}

export default connect(mapStateToProps, {})(App);
