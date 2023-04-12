
export function card (photo,text,opis) {
    return`
    <div class="kartocka">
    <img class="eda" src="${photo}">
    <div class='all'>
    <h2>${text}</h2>
    <p>${opis}</p>
    </div>
    </div>
    `
    
}
