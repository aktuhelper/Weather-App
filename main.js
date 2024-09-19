const submitBtn= document.getElementById('submitBtn');
const cityName= document.getElementById('cityName');
const get_city= document.getElementById('get_city');
const temp_real= document.getElementById('temp_real')
const t= document.getElementById('temp_status');
const getinfo=async(event)=>{
    event.preventDefault();
    let cituval= cityName.value;
    if(cituval===""){
        cityName.innerText= `Please write your city name`;
    }else{
        try{
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${cituval}&units=metric&appid=afa78509fa70594a431d12ff4666fcb0`;
       const response= await fetch(url);
       const data= await response.json()
      const arrdata= [data];
      get_city.innerText=`${arrdata[0].name}, ${arrdata[0].sys.country}`;
      temp_real.innerText=arrdata[0].main.temp;
    const tempstatus= arrdata[0].weather[0].main;
      if (tempstatus == "Clear") {
        t.innerHTML = "<i class='fa-solid fa-sun ' style='color: #eccc68'></i>";
    } else if (tempstatus == "Clouds") {
        t.innerHTML = "<i class='fa-solid fa-cloud '></i>";
    } else if (tempstatus == "Rain") {
        icon.innerHTML = "<i class='fa-solid fa-cloud-showers-heavy ' ></i>";
    } else {
        t.innerHTML = "<i class='fa-solid fa-cloud ' style='color: #aaa'></i>";
    }
        }
        catch{
            cityName.innerText= `Please write your city name`;
        }
    }
}
submitBtn/addEventListener('click',getinfo);