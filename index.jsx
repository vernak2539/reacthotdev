import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import Other from './other';
import Icon from 'design-system-react/components/icon';

class TestMyThing extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Icon assistiveText="More Info" category="utility" name="info" className="slds-icon-text-default" />
			</div>
		);
	}
}

ReactDOM.render(<TestMyThing />, document.getElementById('app'));

if (module.hot) {
	module.hot.accept();
}
