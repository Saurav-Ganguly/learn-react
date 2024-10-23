function UserGreeting(props) {
    const isLoggedIn = props.isLoggedIn;
    return (props.isLoggedIn ? 
    <h2 className="welcome-message">Welcome back, {props.username}!</h2> : 
    <h2 className="login-prompt">Please sign up.</h2>);
}

export default UserGreeting;