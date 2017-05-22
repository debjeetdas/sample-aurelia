import '/bower_components/fetch/fetch';
import {Router} from 'aurelia-router';
export class Home {
//  getData() {
//       fetch('http://jsonplaceholder.typicode.com/posts/1')
//       .then(response => response.json())
//       .then(data => {
//          console.log(data);
//       });
//    }

//    myPostData = { 
//       id: 101
//    }
	
//    postData(myPostData) {
//       fetch('http://jsonplaceholder.typicode.com/posts', {
//          method: "POST",
//          body: JSON.stringify(myPostData)
//       })
		
//       .then(response => response.json())
//       .then(data => {
//          console.log(data);
//       });
//    }

//    myUpdateData = {
//       id: 1
//    }
	
//    updateData(myUpdateData) {
//     fetch('http://jsonplaceholder.typicode.com/posts/1', {
//          method: "PUT",
//          body: JSON.stringify(myUpdateData)
//       })
		
//       .then(response => response.json())
//       .then(data => {
//          console.log(data);
//       });
//    }

//    deleteData() {
//      fetch('http://jsonplaceholder.typicode.com/posts/1', {
//          method: "DELETE"
//       })
//       .then(response => response.json())
//       .then(data => {
//          console.log(data);
//       });
//    }
static inject() { return [Router]; }

  constructor(router){
    this.theRouter = router;
  }
   email = '';
   password = '';
   
   signup() {
      var myUser = { email: this.email, password: this.password }
      console.log(myUser);
      this.theRouter.navigate("addUser");
     
   };
  

}