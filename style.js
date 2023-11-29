if(window.location.href.includes('budget.html'))
{
   let currentuser=localStorage.getItem('User') ;
   console.log("+++",currentuser);
   document.getElementById('headg').innerHTML=`Welcome ${currentuser}`

}

 
function register()
{
    let details={username:urname.value,email:email.value,pwd:pwd.value}
  if(details.username=='' || details.email=='' || details.pwd=='')
  {
    alert('please fill the form')
  }
  else{

  
    if(details.username in localStorage)
  {
    alert("Aleady registered Username!")
  }  
  else{
    localStorage.setItem(details.username,JSON.stringify(details))
    alert("Registration Successfull")
    window.location="./index.html"
  }
}
}

function logout()
{
    localStorage.removeItem('User')
    window.location='index.html'
}

function add()
{
    let incometype=intype.value;
    let incomev=incom.value;
    incomev=Math.floor(incomev);
    console.log(incometype);
console.log(incomev);
    if(incometype=='' || isNaN(incomev) || incomev<=0)
    {
        alert('Please enter the details')
    }
    else{
        user=localStorage.getItem('User')
        console.log(user);
        user1=JSON.parse(localStorage.getItem(user))

       
        

        if(!user1.hasOwnProperty('balance') ) 
        // (!user1.hasOwnProperty('income') ))
        {
            user1.balance = 0;
            // user1.income = [];


        }
        if(!user1.hasOwnProperty('income'))
        {
            user1.income=[]
        }
            user1.income.push({ incometype: incometype, amount: incomev });
            console.log(user1);
        
        user1.balance += incomev;
        console.log(user1.balance);
        console.log(user1);
        balanc.textContent=user1.balance
        let htmldata=`<tr>
        <td class="text-primary p-2">${incometype}</td>
        <td class="text-success p-2">${incomev}</td>
        <td class="text-danger p-2">${user1.balance}</td>
    </tr>`
    tincome.innerHTML=htmldata + tincome.innerHTML;
    localStorage.setItem(user,JSON.stringify(user1))
        }

    }


    function addExp()
    {
        let exptype=etype.value;
        let expence=expen.value;
        expence=Math.floor(expence);
        if(exptype=='' || expence<=0 || isNaN(expence))
        {
            alert('Fill the form')
        }  
        else{
            user=localStorage.getItem('User')
            console.log(user);
            user1=JSON.parse(localStorage.getItem(user))
            if(!user1.hasOwnProperty('spend') ) 
            {
                user1.spend=0;
    
    
            }
            if(!user1.hasOwnProperty('expense'))
            {
                user1.expense=[]
            }
            user1.expense.push({ expensetype: exptype, amount: expence });


            user1.spend+=expence;
            user1.balance-=expence;
            spent1.textContent=user1.spend;
            balanc.textContent=user1.balance
            let htmldata1=`<tr>
            <td class="text-primary p-2">${exptype}</td>
            <td class="text-success p-2">${expence}</td>
            <td class="text-danger p-2">${user1.balance}</td>
        </tr>`

    texpense.innerHTML=htmldata1 + texpense.innerHTML;
    localStorage.setItem(user,JSON.stringify(user1))

        }
    }



    
   