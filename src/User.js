const Users = (props) => {
    console.warn(props)
    return (

        <div>
            <h1>This is User component</h1>
            <h2>Name is {props.data.name}</h2>
            <h2>Age is {props.data.age}</h2>
        </div>

    )
}

export default Users;