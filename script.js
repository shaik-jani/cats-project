fetch('https://api.thecatapi.com/v1/breeds')
  .then((data) => {
    return data.json();
  })

  .then((objectData) => {
    console.log(objectData);
    let tableData = '';
    objectData.map((cats) => {
      tableData += ` <tr>
        <td>${cats.id}</td>
        <td>${cats.name}</td>
        <td>${cats.origin}</td>
        <td>${cats.life_span}</td>
        <td>${cats.weight.metric}</td>
        <td><img src="${cats.image?.url}"/></td>
      </tr>`;
    });

    document.getElementById('table_body').innerHTML = tableData;
  })
  .catch((err) => {
    console.log('error');
    throw err;
  });
