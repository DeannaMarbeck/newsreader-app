
import React, { Component } from 'react';
import Details from '../components/Details';

// Pass news item from navigation props to Details component
class DetailsScreen extends Component {
  render() {
  	const {item} = this.props.navigation.state.params;
    return <Details item={item} />;
  }
}

// Set header bar for details screen
DetailsScreen.navigationOptions = ({navigation}) => ({
	title: 'BBC News',
});

export default DetailsScreen;

