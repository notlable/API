const selectCity = document.querySelector('select');
const div = document.querySelector('div');
const body = document.querySelector('body');
let data = {};

const getData =()=>{
    const url =`https://danepubliczne.imgw.pl/api/data/synop/station/${selectCity.value}`;
fetch(url)
    .then((response)=>{
        if (!response.ok){
            throw new Error ('Blad w api. Sprawdz URL')
        }else {
            return response.json()
        }
    })
    .then (data=>{
        showData(data);
        
    })
    .catch(err=>console.error(err))
}

    const showData=(data)=>{
        console.log(data)
        div.textContent = "";
        div.innerHTML = `
        <p><b>Nazwa miasta</b> : ${data.stacja}</p>
        <p><b>Temperatura</b> : ${data.temperatura}°C</p>
        <p><b>Data</b> : ${data.data_pomiaru}</p>
        <p><b>Godzina</b> : ${data.godzina_pomiaru}:00</p>
        `
        document.body.appendChild(div)
    }
    selectCity.addEventListener('change',(e)=>{
        
        if (selectCity.value == 'gdansk') {
            body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2018/06/21/13/57/clouds-3488632__340.jpg')";
            body.style.height= "100vh";
            body.style.width= "100vh";
            
        }
        if (selectCity.value == 'gdansk'){
            body.style.backgroundImage= "url('https://cdn.pixabay.com/photo/2015/11/15/21/19/gdansk-1044857__340.jpg')";
            body.style.height = "100vh";
            body.style.width = "100vh";
            getData();
        }
        if(selectCity.value == 'warszawa'){
            body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2015/11/01/19/45/warsaw-1017468__340.jpg')";
            body.style.height = "100vh";
            body.style.width = "100vh";
            getData();
        }
        if(selectCity.value == 'poznan') {
            body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2013/02/22/20/01/poznan-85099__340.jpg')";
            body.style.height = "100vh";
            body.style.width = "100vh";
            getData();
        }
        
    })