import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from './store';

class Header extends React.Component {
	componentDidMount() {
		//this.props.getUser();
	}
	render() {
		const { user } = this.props;
		return (
			<div>
				{' hello header'}
				{JSON.stringify(user)}
				{user.name}
				{user.email}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.users
	};
}
function mapDispatchToProps(dispatch) {
	return {
		getUser: () => dispatch(fetchUser())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
