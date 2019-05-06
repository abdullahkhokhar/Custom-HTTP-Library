/**
* EasyHTTP Library
* Library for making HTTP requests
*
* @Author: Abdullah Khokhar
* @Version Update: This version will now use es6 technologies: fetch API,
* es6 classes, promises etc over using Ajax, xhr object, callbacks, prototypes etc.
**/

class EasyHTTP{
  // we do not require a constructor

  // Make an HTTP GET requests
   get(url){
     // this promise will allow us to return to app.js the result only when it
     // is finished
     return new Promise((resolve, reject) => {
       fetch(url) // fetch itself returns a promise
       .then(res => res.json())
       .then(data => resolve(data))
       .catch(err => reject(err));
     });
   }

   // Make an HTTP Post request
   post(url, data){
     // this promise will allow us to return to app.js the result only when it
     // is finished
     return new Promise((resolve, reject) => {
       fetch(url, {
         method: 'POST',
         header: {'Content-type': 'application/json'},
         body: JSON.stringify(data)
       })
       .then(res => res.json())
       .then(data => resolve(data))
       .catch(err => reject(err));
     });
   }

   // Make an HTTP PUT request
   put(url, data){
     // this promise will allow us to return to app.js the result only when it
     // is finished
     return new Promise((resolve, reject) => {
       fetch(url, {
         method: 'PUT',
         header: {'Content-type': 'application/json'},
         body: JSON.stringify(data)
       })
       .then(res => res.json())
       .then(data => resolve(data))
       .catch(err => reject(err));
     });
   }

   // Make an HTTP DELETE request
   delete(url){
     // this promise will allow us to return to app.js the result only when it
     // is finished
     return new Promise((resolve, reject) => {
       fetch(url, {
         method: 'DELETE',
         header: {'Content-type': 'application/json'},
       })
       .then(res => res.json())
       .then(data => resolve('Deleted!'))
       .catch(err => reject(err));
     });
   }


}
