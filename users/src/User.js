
function User({name,username,email,phone}) {
  return (
    <tr>
        <td>{name}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{phone}</td>
    </tr>
  );
}

// function User({user}) {
//   return (
//     <tr>
//         <td>{user['id']}</td>
//         <td>{user['name']['firstname'] + ' ' + user['name']['lastname']}</td>
//         <td>{user['email']}</td>
//         <td>{user['address']['number'] + ', ' + user['address']['street']}</td>
//     </tr>
//   );
// }

export default User;
