import React,{useState} from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";

function App() {

  const [data, setData] = useState([
    { id: '1', sp: "300", pn: "chips", cat: "food" },
    { id: '2', sp: "600", pn: "battery", cat: "Electronics" },
  ]);

  

  const addDataHandler = (enteredData) => {

    setData(prevdata => {
      return [enteredData, ...prevdata];
    })
  }

  const deleteHandler = (deltetedItemId) => {
    // console.log(deltetedItemId);
    setData(prevData => {
      return prevData.filter(item => {
        // console.log(item.id)
       return  item.id !== deltetedItemId
      })
    })

};


  const foodData = data.filter((item) => { return item.cat === 'food' });
  const eleetronicData = data.filter((item) => { return item.cat === "Electronics" });
  const skinData = data.filter((item) => {
    return item.cat === "SkinCare";
  });
  
  

  return (
    <React.Fragment>
      <Form addItem={addDataHandler} />
      <List ondelete={deleteHandler} category={'Food'} listItems={foodData} />
      <List ondelete={deleteHandler} category={'Electronics'} listItems={eleetronicData} />
      <List ondelete={deleteHandler} category={'SkinCare'} listItems={skinData} />
      
    </React.Fragment>
  );
}

export default App;
