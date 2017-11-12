import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	// *** React's lifecycle methods ***

	componentWillMount() {

	}

	componentDidMount() {

	}

	componentWillReceiveProps(nextProps) {

	}

	shouldComponentUpdate(nextProps, nextState) {

	}

	componentWillUpdate() {

	}

	componentDidUpdate() {

	}

	componentWillUnmount() {

	}

	// *** End of lifecycle methods ***

	render() {
		return (
			<div>
			  Hello World!
			  Thanks for cloning the React boilerplate with Express, Node, and Webpack. 
			</div>
		)
	}
}

export default App