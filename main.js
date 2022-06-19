// const example ={
//     stacja: 'Szczecin',
//     godzina_pomiaru: '6',
//     temperatura: '21.1',
// };
// const miasto = prompt('Podaj nazwe miasta')
// const div = document.querySelector('div');
let valueCity;
const selectCity = document.querySelector('select');

let data = {};

const getData =()=>{
    const url =`https://danepubliczne.imgw.pl/api/data/synop/station/${valueCity}`;
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
        const div = document.createElement('div');
        div.innerHTML = `
        <p>Nazwa miasta - ${data.stacja}</p>
        <p>Temperatura - ${data.temperatura}</p>
        <p>Data- ${data.data_pomiaru}</p>
        <p>Godzina - ${data.godzina_pomiaru}</p>
        `
        document.body.appendChild(div)
    }
    selectCity.addEventListener('change',(e)=>{
        getData();
    })