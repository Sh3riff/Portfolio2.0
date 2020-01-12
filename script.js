document.addEventListener('DOMContentLoaded', () => {
    const phonebtn = document.querySelector('#phonebtn');
    phonebtn.addEventListener('change', e => {
        const menuPage = document.querySelector('#mobileNav');
        const phoneHome = document.querySelector('#homePage');
        if(phonebtn.checked){           
            phoneHome.classList.remove('show')
            phoneHome.classList.add('unshow')
            menuPage.classList.remove('unshow')
            menuPage.classList.add('show')
        }else {
            menuPage.classList.remove('show')
            menuPage.classList.add('unshow')
            phoneHome.classList.remove('unshow')
            phoneHome.classList.add('show')
        }
    })


    
})
