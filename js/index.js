const loadPhone = async (ID) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${ID}`);
    const data = await res.json();

    const phone = data.data;
    diaplayPhones(phone);
}

const diaplayPhones = phones => {
    const newDiv = document.getElementById('display ');
    newDiv.innerHTML='';
    phones.forEach(phone => {
        const phoneCard = document.createElement('div');

        phoneCard.innerHTML = `
        <div class="card text-center p-4 border border-[#CFCFCF] border-solid rounded-lg">
        <figure class="bg-[#0d6efd] bg-opacity-5 py-6 mx-2 rounded-lg">
            <img  src=${phone.image}>
        </figure>
         <h3 class="text-xl font-bold text-[#403F3F] my-3 ">${phone.phone_name}</h3>
         <p class="secondary text-sm mb-3 mx-4">There are many variations of passages of available, but the majority have suffered</p>
         <h4 class="text-base font-bold text-[#403F3F] ">$999</h4>
         <button  onclick="handleDetails('${phone.slug}')" class="my-3 bg-color text-white text-sm font-semibold w-32 py-2 rounded mx-auto">Show Details</button>



    </div>
        `;
        newDiv.appendChild(phoneCard);

    });

}



const handlePhone = () => {


    console.log('object');

    const searchId = document.getElementById('searchValue');

    const searchValue = searchId.value;
    console.log(searchValue);

    searchId.value = '';

    loadPhone(searchValue);


}


const handleDetails = async (PD) => {

  



    const phonDetails = await fetch(`https://openapi.programming-hero.com/api/phone/${PD}`);
    const modal = await phonDetails.json();
    const modalDetails = modal.data;
    console.log(modalDetails.name);

    const modalId = document.getElementById('modal-details');

    modalId.innerHTML = '';





    const newModal = document.createElement('div');



    newModal.innerHTML = `
    <figure class="bg-[#0d6efd] bg-opacity-5 py-6 mx-2 rounded-lg">
    <img class=" w-1/3 mx-auto  my-6 "  src=${modalDetails.image} alt="">
</figure>


    
    <div  class="px-2">
    <h3 class="text-[#403F3F] my-3 font-bold text-xl text-left">${modalDetails.name}</h3>
    <p class="secondary text-xs text-left">It is a long established fact that a reader will
        be
        distracted by the readable content of a page when looking at its layout.</p>
    <p class="secondary text-left text-sm mt-2"><span
            class="text-[#403F3F] font-bold">Storage
            :</span> ${modalDetails.mainFeatures?.storage} </p>
    <p class="secondary text-left text-sm mt-2"><span
            class="text-[#403F3F] font-bold">Display
            Size :</span> ${modalDetails.mainFeatures?.displaySize}</p>
    <p class="secondary text-left text-sm mt-2"><span
            class="text-[#403F3F] font-bold">Chipset
            :</span> ${modalDetails.mainFeatures?.chipSet}</p>
    <p class="secondary text-left text-sm mt-2"><span
            class="text-[#403F3F] font-bold">Memory
            :</span> ${modalDetails.mainFeatures?.memory}</p>
    <p class="secondary text-left text-sm mt-2"><span class="text-[#403F3F] font-bold">Slug
            :</span> ${modalDetails?.slug}</p>
    <p class="secondary text-left text-sm mt-2"><span
            class="text-[#403F3F] font-bold">Release
            data :</span> ${modalDetails.releaseDate}</p>
    <p class="secondary text-left text-sm mt-2"><span class="text-[#403F3F] font-bold">Brand
            :</span> ${modalDetails.brand}</p>
    <p class="secondary text-left text-sm mt-2"><span class="text-[#403F3F] font-bold">GPS
            :</span> ${modalDetails.others?.GPS || 'No GPS'} </p>


    </div>
    <div class="modal-action">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="bg-[#DC3545]  text-white py-2 px-6 rounded-md font-bold">Close</button>
                </div>
    
    
           `



    modalId.appendChild(newModal);



    my_modal_5.showModal();
}

loadPhone('a');


