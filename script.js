document.addEventListener('DOMContentLoaded', () => {


        screen.orientation.lock('natural');

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
    });

    (function showTime (){
        let timeNow = new Date();
        const addZeroToTime = (m) => {
            if(m < 10){
                return '0'+m
            }else {
                return m
            }
        };
        const aZ = addZeroToTime;
        const hourFormat = (hr) => {
            let m = hr % 12 || 12;
            if(m < 10){
                return '0'+m
            }else {
                return m
            }      
        };
        const hf = hourFormat;
        const traytime = document.querySelector('.traytime');
        const navtime = document.querySelector('.navtime');
        const maintime = document.querySelector('.maintime');
        const maindate = document.querySelector('.maindate');
        let sec = timeNow.getSeconds();
        let min = timeNow.getMinutes();
        let hour = timeNow.getHours();
        let hrMin = `${hf(hour)}:${aZ(min)}`;    
        let hrMinSec = `${hf(hour)}:${aZ(min)}:${aZ(sec)}`;    
        let fulldate = timeNow.toDateString();
        let fulltime = timeNow.toLocaleTimeString();        
        traytime.innerHTML = `${hrMin}`;
        navtime.innerHTML = `${hrMin}`;
        maintime.innerHTML = `${hrMinSec}`;
        maindate.innerHTML = `${fulldate}`;
        setTimeout(showTime, 1000);
    }());

    (function timeOfTheDay (){
            let greet = new Date();
            let hour = greet.getHours();
            let greetTime = document.querySelector('.greet')    
            if (hour < 12){
                greetTime.innerText = 'Good Morning'
            }else if(hour < 18){
                greetTime.innerText = 'Good Afternoon'
            }else{
                greetTime.innerText = 'Good Evening'
            }
        }());

    const appuser = document.querySelector('#appuser');
    (function getAppUserName() {
        if(localStorage.getItem('appuser')){
            appuser.innerText = localStorage.getItem('appuser');
            appuser.contentEditable = false;
        }else {
            appuser.innerText = '[Enter name]'
        }

        appuser.addEventListener('blur', e => {
            if(e.type === 'blur'){
                localStorage.setItem('appuser', e.target.innerText);
                appuser.contentEditable = false;
            }
        })
        appuser.addEventListener('keypress', e => {
                if (e.keyCode == 13){
                    localStorage.setItem('appuser', e.target.innerText);
                    appuser.blur();
                }
        })
    }());

    const searcher = document.forms['searcher'].querySelector('input')
    searcher.addEventListener('keyup', e => {
        const searchInput = e.target.value.toLowerCase();
        const myApps = document.querySelector('.appicons')
        const myAppNames = document.querySelector('.iconnames')
        const listOfApps = myApps.querySelectorAll('span')
        const listOfAppNames = myAppNames.querySelectorAll('span')
        listOfApps.forEach(app => {
            const appId = app.className.toLowerCase();
            if(appId.indexOf(searchInput) != -1){
                app.style.display = 'flex'
            }else {
                app.style.display = 'none'
            }
        })
        listOfAppNames.forEach(app => {
            const appId = app.className.toLowerCase();
            if(appId.indexOf(searchInput) != -1){
                app.style.display = 'flex'
            }else {
                app.style.display = 'none'
            }
        })
    })

    
    (function appLauncher() {
        let apps = document.querySelectorAll('.appicons')
        let action = e =>{
            if(e.target.tagName === 'SPAN'){
                console.log(`${e.target.className}`)
            }
        }
        apps.forEach(child => {
            child.addEventListener('click', action)
        })
        apps.forEach(child => {
            child.addEventListener('mouseover', action)
        })
    }());



})
