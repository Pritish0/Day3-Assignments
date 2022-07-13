import './App.css';
import React,{useState} from 'react';
import data from './products.json';
import Product from './Product';


function App() {

  const [tabledata,setTableData] = useState(data);
  const [fieldToSort, setFieldToSort] = useState('title');
  const [ascsortOrder, setAscSortOrder] = useState(true);

  const compare = (a, b) => {
    if(ascsortOrder) {
      return a[fieldToSort].localeCompare(b[fieldToSort])
    }
    else{
      return a[fieldToSort].localeCompare(b[fieldToSort])*-1;
    }

  }

  const handleSorting = (field) => {
    setFieldToSort(field);
    if(field==='title' && fieldToSort==='title' || field==='category' && fieldToSort==='category') {
      setAscSortOrder(!ascsortOrder);
    }
  }

  

  const handleDataFilter = (e) => {
    let arr = data.filter((product) => {
        return(
          product[e.target.name].toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
        ); },
    )
    setTableData(arr);
  }

  const handleSubmit = () => {
    tabledata.map((product) =>{
      console.log(product['title'])
    })
  }

  return (
    <div className="App">
      <br/>
      &nbsp;
      <input type="text" name="title" placeholder="Filter by Title" onKeyUp={handleDataFilter}/> &nbsp;
      <input type="text" name="category" placeholder="Filter by Category" onKeyUp={handleDataFilter}/> &nbsp;
      <button onClick={handleSubmit}>Submit</button>
      <br/>
      <table>
        <thead>
          <tr>
            <th>
              Title
              &nbsp;
              <button onClick={() => handleSorting('title')}>Sort {
                fieldToSort==='title' ? (
                  ascsortOrder ? ('↓'): ('↑')
                ): ('↓')
                }
              </button>
            </th>
            <th>
              Category
              &nbsp;
              <button onClick={() => handleSorting('category')}>Sort {
                fieldToSort==='category' ? (
                  ascsortOrder ? ('↓'): ('↑')
                ): ('↓')
                }
              </button>
            </th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {tabledata.sort(compare).map((product, index) => {
            console.log(product);
            return(
              <Product 
                key={index} 
                title={product['title']}
                category={product['category']}
                price={product['price']}
                rating={product['rating']['rate']}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
