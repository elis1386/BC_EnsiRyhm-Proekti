  
  /* MODAL FUNCTIONS */

  function sendMessageModal() {
    const dialog = document.querySelector("#dialog");
    dialog.showModal();
  }


  function showCartModal()
  {   
    let amount = count.textContent
    if(amount == 0)
    {
      const cartDialog = document.querySelector('#cart_dialog')
      cartDialog.showModal()
    }
    else{
      const cartDialog2 = document.querySelector('.cart_dialog2')
      cartDialog2.showModal()
    }
  }


  function closeModal()
  {
      const closeModal = document.querySelector('#clodeModal')
      closeModal.closeModal()
  }

  
  
  


  
  
  
  
  