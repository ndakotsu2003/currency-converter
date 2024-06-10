window.addEventListener('load', function(){
 const rates= document.querySelector("#rates");
 const menu_1 = document.querySelector("#menu_1");
 const menu_2 = document.querySelector("#menu_2");
 const first = document.querySelector("#first");
 const second = document.querySelector("#second");

  function workout(){
        const m1 = menu_1.value;
        const m2 = menu_2.value;

        fetch(`https://v6.exchangerate-api.com/v6/a59c1b719148d1ed9c3f9632/latest/${m1}`)
        .then(function(res){
            return res.json();
        }).then(function(data){
            const rr = data.conversion_rates[m2];
            rates.innerText = `1 ${m1} =  ${rr} ${m2}`;
            second.value = (first.value * rr).toFixed(2) ;
        })

  }

  menu_1.addEventListener('change', workout);
  menu_2.addEventListener('change', workout);
  first.addEventListener('input', workout);
  second.addEventListener('input', workout);
   workout();


})