function User( {users} ) {
    const data = users.map((user) => (
        <li key={user.id}>
            {user.name}, {user.age}
        </li>
    ));

    return (
        <ul>
            {data}
        </ul>
    );
}

export default User;