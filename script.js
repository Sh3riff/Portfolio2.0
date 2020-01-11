document.addEventListener('DOMContentLoaded', () => {
    const phonebtn = document.querySelector('#phonebtn');
    phonebtn.addEventListener('change', e => {
        const menuPage = document.querySelector('#mobileNav');
        const phoneHome = document.querySelector('#homePage');
        if(phonebtn.checked){           
            phoneHome.className = 'unshow'
            menuPage.className = 'show'
        }else {
            menuPage.className = 'unshow'
            phoneHome.className = 'show'
        }
    })


    
})
