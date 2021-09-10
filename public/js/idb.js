
// create variable to hold db connection
//that will store the connected database object when the connection is complete
let db;
//create a 'request variable when the conncetion is opened  or created 
// establish a connection to IndexedDB database called 'budget_tracker' and set it to version 1
const request = indexedDB.open('budget_tracker', 1);  
// 'request'acts as an eventlistener for db 

// this event will be triggered if the database is deleted/created or if version changes 
request.onupgradeneeded = function(event) {
    // save a reference to the database 
    const db = event.target.result;
    // create an object store to hold the data , set it to have an auto incrementing primary key for easy access 
    db.createObjectStore('new_transaction', { autoIncrement: true });
};        
// upon a successful connection
request.onsuccess = function(event) {
    // when db is successfully created with its object store (from onupgradedneeded event above)
    //save the database object to the global variable db 
    db = event.target.result;
  
    // check if app is online, if yes run  function to send all local db data to api
    if (navigator.onLine) {
      // call  function
    }
  };
  
  // Flash error when there is error in db interaction or a  connection issue 
  request.onerror = function(event) {
    // log error here
    console.log("No connection" +event.target.errorCode);
  };
// write and Save the data 

function saveRecord(record) {
    // open a new transaction(a temp connection)to the database with read and write permissions 
    const transaction = db.transaction(['new_transaction'], 'readwrite');
  
    // access the object store for `new_transaction'
    const budgetObjectStore = transaction.objectStore('new_transaction');
  
    // add record to your store with add method
    budgetObjectStore.add(record);
  }

// function that will handle collecting all of the data 
function uploadTransactions(){
  // Open a transaction in your db 
  const transaction = db.transaction(['new_transaction'], 'readwrite');

  // access the object store
  const budgetObjectStore = transaction.objectStore('new_transaction');

  // get  all the records from the objectstore 
  const getAll = budgetObjectStore.getAll();

  // if getAll() is success  and  we could get trasaction records from budgetobject store -  
  getAll.onsuccess = function (){
    // If the db has any records 
    if(getAll.result.length > 0)
    {
      // send the array of data using fetch 
      fetch('/api/transaction',{
        method :post,
        body :JSON.stringify(getAll.result),
        headers:{
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(response =>response.json())
      .then(serverResponse =>{
        if(serverResponse.message){
          throw new Error(serverResponse);
        }
        // upon success transmission of data 
        // Access the object store and clear the data. 
        else {
          const transaction = db.transaction(['new_transaction'], 'readwrite');
          // access the object store
          const budgetObjectStore = transaction.objectStore('new_transaction');
          budgetObjectStore.clear();
          alert('All the transactions have been added successfully!!')
         
        }
      })
      .catch(err =>{
        console.log(err);
      })
    }

  }

//An eventlistener to check the network status changes- 
//when its back online, to send the saved data in Indexeddb to the server 
window.addEventListener('online',uploadTransactions);
}
