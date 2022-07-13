
function Product({title,category,price,rating}) {
  return (
    <tr>
        <td>{title}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{rating}</td>
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

export default Product;
