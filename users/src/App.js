import './App.css';
import React,{useState} from 'react';
import data from './users.json';
import User from './User';

function App() {

  const [fieldToSort, setFieldToSort] = useState('name');
  const [ascsortOrder, setAscSortOrder] = useState(true);

  const compare = (a, b) => {
    if(ascsortOrder) {
      if(fieldToSort==='name') {
        return a['name']['firstname'].localeCompare(b['name']['firstname']);
      }
      else{
        return a[fieldToSort].localeCompare(b[fieldToSort])
      }
      // if (a[fieldToSort] < b[fieldToSort]) { 
      //   return 1;
      // }
      // if (a[fieldToSort] > b[fieldToSort] ) {
      //   return -1;
      // }
      // return 0;
    }
    else{
      if(fieldToSort==='name') {
        return a['name']['firstname'].localeCompare(b['name']['firstname'])*-1;
      }
      else{
        return a[fieldToSort].localeCompare(b[fieldToSort])*-1;
      }
    //   if (a[fieldToSort] < b[fieldToSort]) { 
    //     return -1;
    //   }
    //   if (a[fieldToSort] > b[fieldToSort] ) {
    //     return 1;
    //   }
    //   return 0;
    }

  }

  const handleSorting = (field) => {
    setFieldToSort(field);
    if(field==='name' && fieldToSort==='name' || field==='email' && fieldToSort==='email') {
      setAscSortOrder(!ascsortOrder);
    }
  }


  return (
    <div className="App">

      {/* <ol>
        {data.map((user, index) => {
          return(
            <li key={index}>{user['name']['firstname'] + ' ' + user['name']['lastname']}</li>
          );
        })}
      </ol> */}

      <table>
        <thead>
          <tr>
            <th>
              Name
              &nbsp;
              <button onClick={() => handleSorting('name')}>Sort {
                fieldToSort==='name' ? (
                  ascsortOrder ? ('↓'): ('↑')
                ): ('↓')
                }
              </button>
            </th>
            <th>Username</th>
            <th>
              Email
              &nbsp;
              <button onClick={() => handleSorting('email')}>Sort {
                fieldToSort==='email' ? (
                  ascsortOrder ? ('↓'): ('↑')
                ): ('↓')
                }
              </button>
            </th>
            <th>Phone no.</th>
          </tr>
        </thead>
        <tbody>
          {data.sort(compare).map((user, index) => {
            console.log(user);
            return(
              <User 
                key={index} 
                // user={user}
                username={user['username']}
                email={user['email']}
                phone={user['phone']}
                name={user['name']['firstname'] + ' ' + user['name']['lastname']}
              />
            );
          })}
        </tbody>
      </table>

    </div>
  );
}

export default App;
