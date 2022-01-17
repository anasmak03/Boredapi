let btn = document.getElementById('btn');
const para = document.getElementById('replace')

btn.addEventListener("click", selectData)

let api = "https://apis.scrimba.com/bored/api/activity";
async function selectData(){
    try{
        
        const response = await fetch(api)
        const data = await response.json()
        para.innerHTML = `
        <h4>${data.activity}</h4>
        `
        document.body.classList.add('fun')
    }
    catch{
        console.log('Eroor from server')
    }


    
}