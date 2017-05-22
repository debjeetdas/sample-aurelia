import '/bower_components/fetch/fetch';


export class About {
    jsonValue={};
    localjsonValue=[];
     getData() {
      fetch('http://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
         this.jsonValue=data;
         
      });
   }

   myPostData = { 
      id: 101
   }
	
   postData(myPostData) {
      fetch('http://jsonplaceholder.typicode.com/posts', {
         method: "POST",
         body: JSON.stringify(myPostData)
      })
		
      .then(response => response.json())
      .then(data => {
         this.jsonValue=data;
      });
   }

   myUpdateData = {
      id: 1
   }
	
   updateData() {
    fetch('../src/components/json/data.json', {
         method: "get"
      })
		
      .then(response => response.json())
      .then(data => {
         this.localjsonValue=data.result;
      });
   }

   deleteData() {
     fetch('http://jsonplaceholder.typicode.com/posts/1', {
         method: "DELETE"
      })
      .then(response => response.json())
      .then(data => {
        this.jsonValue=data;
      });
   }
}