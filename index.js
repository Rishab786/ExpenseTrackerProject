
let form=document.getElementById('add');
form.addEventListener('click', addExpense);
function addExpense(e)
{   e.preventDefault();
    const amount=document.getElementById('amount').value;
    const description=document.getElementById('description').value;
    if(amount.trim()==="" || description.trim()==="")
    {
        alert("Please Enter Valid Text and Amount");
    }
    else
    {
    const id=generateId();
    const category=document.getElementById('categories').value;
    var obj={
        Amount:amount,
        Description:description,
        Category:category
    };
     localStorage.setItem(id,JSON.stringify(obj));
    const component=document.getElementById('uList');
    const newElement=document.createElement('li');
    newElement.id=id;
    newElement.className="fs-5";
    newElement.innerHTML=`${description}  ${amount}  ${category}  `; 
    component.appendChild(newElement);
    const newBtn=document.createElement('button');
    const editBtn=document.createElement('button');
    newBtn.className="btn btn-danger";
    editBtn.className="btn btn-secondary";
    newBtn.textContent='Del';
    editBtn.textContent='Edit';
    newElement.setAttribute("onclick", "remove(this)"); 
    editBtn.setAttribute("onclick", "edit(this)");
    newElement.appendChild(newBtn);
    newElement.appendChild(editBtn);
    }
    clearInputs() ;
 }
function clearInputs() { 
    document.getElementById('amount').value = ""; 
    document.getElementById('description').value = ""; 

} 
function remove(e)
{
    let removeElement=e.id;
    localStorage.removeItem(removeElement);
    e.parentNode.removeChild(e);
}
function edit(e)
{
    let removeElement=e.parentNode.id;
    let obj = JSON.parse(localStorage.getItem(removeElement));
    let amount=obj.Amount;
    let desc=obj.Description;
    document.getElementById('amount').value =amount;
    document.getElementById('description').value =desc;
    localStorage.removeItem(removeElement);
}
function generateId()
{
    return Math.floor(Math.random()*10000);
}