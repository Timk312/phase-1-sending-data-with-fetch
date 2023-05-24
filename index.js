// Add your code here


function submitData(name,email){
  const body = document.body
  let data={
    name,
    email
  }
  const configObj = {
  
    method:"POST",
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
   body: JSON.stringify(data)
}
return fetch("http://localhost:3000/users",configObj)
.then(function (response) {
  return response.json()
})
.then(function (object) {
  body.append(object.id)
console.log(object)
})
.catch(function (error) {
  alert('Unauthorized Access')
  body.append(error.message)
  console.log(error.message)
})


}