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
        const traytime = document.querySelector('.traytime')
        const maintime = document.querySelector('.maintime')
        const date = document.querySelector('.date')
        let min = timeNow.getMinutes();
        let hour = timeNow.getHours();
        let hrMin = `${hr(hour)}:${aZ(min)}`      
        let fulldate = timeNow.toDateString();
        let fulltime = timeNow.toLocaleTimeString();
        
        traytime.innerHTML = `${hrMin}`;
        maintime.innerHTML = `${fulltime}`;
        date.innerHTML = `${fulldate}`;
        
        // time.innerHTML = `${hour}<span>:</span>${aZ(min)}<span>:</span>${aZ(sec)}`;

        setTimeout(showTime, 1000);
    }());


    
})
