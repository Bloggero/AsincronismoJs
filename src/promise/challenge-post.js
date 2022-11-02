import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';


function postData(urlApi, data){
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}



function fetchData(urlApi){
    return fetch(urlApi);
};


function deleteData(urlApi){
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return response;
}




const data = {
    "title": "New Product Course 12",
    "price": 9000,
    "description": "A description xd",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  };

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => {
        console.log("INSERTADO")
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++');
        console.log(data);
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++');

        return fetchData(`${API}/products/${data.id}`)
    })
    .then(products => products.json())
    .then(product => {
        console.log("ENCONTRADO");
        console.log('----------------------------------------------------------------');
        console.log('product', product);
        console.log('----------------------------------------------------------------');
            // return deleteData(`${API}/products/${product.id}`);
    })
    // .then(deleted => deleted.json())
    // .then(data => {
    //     if (data){
    //         console.log(`Removido con éxito`);
    //     }else{
    //         console.log(`No pudo ser removido`);
    //     }
    // })
    .catch(error => console.log(error))
    .finally(() => console.log('Done'));





// deleteData(`${API}/products/242`)
//     .then(response => response.json())
//     .then(data => console.log('data', data))
//     .catch(error => console.log(error))
//     .finally(() => console.log('Done Delete'));
