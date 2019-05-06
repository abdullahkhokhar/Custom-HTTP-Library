// Will ES5 OOP Library with Protocols
// will update this library after to use Fetch API instead of AJAX and use classes

// constructor
function easyHTTP(){
  this.http = new XMLHttpRequest();
}

// will have 4 different prorotype methods

// Make an HTTP GET request
easyHTTP.prototype.get = function(url, callback){
  this.http.open('GET', url, true);

  // cant use the keyword this inside the function body
  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      callback(null, self.http.responseText);
    } else {
      callback(`error: ` + self.http.statis);
    }
  }
  this.http.send();
}

// Make an HTTP POST request

easyHTTP.prototype.post = function(url, data, callback){
  this.http.open('POST', url, true);
  // set the data type you are working with
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function(){
    // we know a new post if id is 101
    callback(null, self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}

// Make an HTTP PUT request
easyHTTP.prototype.put = function(url, data, callback){
  this.http.open('PUT', url, true);
  // set the data type you are working with
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function(){
    // we know a new post if id is 101
    callback(null, self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}


// Make an HTTP DELETE request
easyHTTP.prototype.delete = function(url, callback){
  this.http.open('DELETE', url, true);

  // cant use the keyword this inside the function body
  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      callback(null, 'POST DELETED');
    } else {
      callback(`error: ` + self.http.statis);
    }
  }
  this.http.send();
}
