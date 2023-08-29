const loadPhone = async (ID) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${ID}`);
    const data = await res.json();
    const phone= data.data;
   diaplayPhones(phone);
}

const diaplayPhones = phones =>{
    
    const newDiv= document.getElementById('display ');
    newDiv.innerHTML='';

    phones.forEach(phone=> {
        
        const phoneCard=document.createElement('div');
        phoneCard.innerHTML=`
        <div class="card text-center p-4 border border-[#CFCFCF] border-solid rounded-lg">

        <figure class="bg-[#0d6efd] bg-opacity-5 py-6 mx-2 rounded-lg">
            <img src=${phone.image}>
        </figure>
         <h3 class="text-xl font-bold text-[#403F3F] my-3 ">${phone.phone_name}</h3>
         <p class="secondary text-sm mb-3 mx-4">There are many variations of passages of available, but the majority have suffered</p>
         <h4 class="text-base font-bold text-[#403F3F] ">$999</h4>
         <button class="my-3 bg-color text-white text-sm font-semibold w-32 py-2 rounded mx-auto">Show Details</button>



    </div>
        `;
        newDiv.appendChild(phoneCard);
        
        
    });

}


const handlePhone= ()=>{
    console.log('object');

    const searchId= document.getElementById('searchValue');
    const searchValue= searchId.value;
    console.log(searchValue);
    searchId.value='';
    loadPhone(searchValue);

}

loadPhone('apple');
