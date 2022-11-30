
let top3 = [
    {
      "Name": "Narocs",
      "Year": "2015",
      "Director": 'José Padilha',
      "Picture":"https://upload.wikimedia.org/wikipedia/en/b/b9/Narcos_season_1.png"
    },
    {
        "Name": "The Valet",
        "Year": "2022",
        "Director": 'Richard Wong',
        "Picture": "https://i0.wp.com/www.36vibes.com.ng/wp-content/uploads/2022/05/The-Valet-2022-Movie-Review.jpg?w=1024&ssl=1"
    },
    {
        "Name": "Shootas",
        "Year": "2002",
        "Director": 'Cess Silvera',
        "Picture": 'https://upload.wikimedia.org/wikipedia/en/c/cc/Shottas2002Film.jpg'
      }
  ]
  const top3movie = top3.map(function(top3){
    return`
    <li>
    <p>Name: ${top3.Name}</p>
    <p>Year: ${top3.Year}</p>
    <p>Director: ${top3.Director}</p>
    <img src="${top3.Picture}">
    </li>`
})

  const ol = document.querySelector('ol');
  console.log (ol);
ol.innerHTML=top3movie;