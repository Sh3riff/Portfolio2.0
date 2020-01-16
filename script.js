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
        const hr = hourFormat;
        const traytime = document.querySelector('.traytime');
        const maintime = document.querySelector('.maintime');
        const maindate = document.querySelector('.maindate');
        let sec = timeNow.getSeconds();
        let min = timeNow.getMinutes();
        let hour = timeNow.getHours();
        let hrMin = `${hr(hour)}:${aZ(min)}`;    
        let hrMinSec = `${hr(hour)}:${aZ(min)}:${aZ(sec)}`;    
        let fulldate = timeNow.toDateString();
        let fulltime = timeNow.toLocaleTimeString();        
        traytime.innerHTML = `${hrMin}`;
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

})
