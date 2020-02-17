document.addEventListener('DOMContentLoaded', () => {
    
    (function fullScreen(){
        document.addEventListener('click', ()=> {
            if(document.documentElement.requestFullscreen){
                document.querySelector(".container").requestFullscreen();
            }
            screen.orientation.lock('natural');
        });
            
    }());

    (function homebtn(){
        document.querySelector('#homebtn').addEventListener('change', e => {
            document.querySelector('.appnav').classList.toggle('unshow');
            document.querySelector('.apphome').classList.toggle('unshow');
        });
    }());


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


    (function search(){
        const searcher = document.forms['searcher'].querySelector('input')
        searcher.addEventListener('keyup', e => {
            const searchInput = e.target.value.toLowerCase();
            const listOfApps = document.querySelector('.appicons').querySelectorAll('span')
            const listOfAppNames = document.querySelector('.iconnames').querySelectorAll('span')
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
        });
    }());

    
    (function appLauncher() {
        let app = document.querySelectorAll('.appnav .appicons')
        let appAction = e =>{
            if(e.target.closest('svg')){
                console.log(`${e.target.closest('svg').classList} for phones`)
            }
        }

        app.forEach(child => {
            child.addEventListener('click', appAction)
        })

    }());



})
