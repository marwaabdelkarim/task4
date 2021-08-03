
var users =[]

function addUser()
{

 var obj={
    name :prompt('enter your name'),
    balance : prompt('enter your balance'),
    id : prompt('enter your id')

  }
users.push(obj)
console.log(users)
}

function showUser(){
    console.table(users)
}
addUser()
addUser()
addUser()
function editUserById (){
    id = prompt('enter your id')
    newbalance = prompt('enter your new balance')
    users.forEach((element) => {
    if(id===element.id){
        element.balance=newbalance;
    }    
    });
showUser()

}
editUserById()
showUser()


function deleteUserById(){
    id = prompt('enter your id  that will delete')
    users.forEach((element) => {
        if(id===element.id){
               
users.splice(2,2)
        }     
        });
showUser()
}
deleteUserById()

    

    