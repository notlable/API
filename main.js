const example ={
    stacja: 'Szczecin',
    godzina_pomiaru: '6',
    temperatura: '21.1',
};

const url =`https://danepubliczne.imgw.pl/api/data/synop/station/jeleniagora`;
let data = {};

fetch(url)
    .then((response)=>{
        if (!response.ok){
            throw new Error ('Blad w api. Sprawdz URL')
        }else {
            return response.json()
        }
    })
    .then (next=>{
        showData(next);
    })
    .catch(err=>console.error(err))

    const showData=(data)=>{
        console.log((data))
    }