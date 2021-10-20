function Main(props) {
    return (
        <div>
            <h2>welcome, {props.user.email}</h2>
            <button onClick={props.logout}>Logout</button>
        </div>
    );
}

export default Main;
