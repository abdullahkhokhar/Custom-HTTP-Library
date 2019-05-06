const http = new easyHTTP;

// get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, response){
  if(err){
    console.log(err);
  } else {
    console.log(response);
  }
});

// Create Data
const data = {
  title: 'Custom Post',
  body: 'this is data to be posted'
};

// make the post
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
    if(err){
      console.log(err);
    } else {
      console.log(post);
    }
});

//update a post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
    if(err){
      console.log(err);
    } else {
      console.log(post);
    }
});

// get Posts
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
  if(err){
    console.log(err);
  } else {
    console.log(response);
  }
});
