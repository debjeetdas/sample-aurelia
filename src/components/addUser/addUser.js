export class AddUser {
    //  selectedOptions = [];

    // someOptions = [
    //     {value: 1, name: 'BA'},
    //     {value: 2, name: 'BU'}
    // ];

   emailId = '';
   name = '';

    someOptions = [
        {value: 1, name: 'BA'},
        {value: 2, name: 'BU'}
    ];

    tablevalue=[];
    

     AddUser() {
       this.tablevalue.push({ emailId: this.emailId, name: this.name ,role:this.selectedVal.name});
      console.log(this.tablevalue);
   };
}