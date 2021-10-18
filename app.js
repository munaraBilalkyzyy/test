let ekranInput = document.querySelector('.input');
let btn = document.querySelectorAll('td');



// document.querySelector('.acc').addEventListener('click', function(onof){
//     let ekranIn = ekranInput;

//     ekranIn.classList.remove('infocus')

// })

function onof(){
    var ekranIn = ekranInput;

    ekranIn.classList.remove('infocus')

}


btn.forEach(function(knopka){
    knopka.addEventListener('click', function(e){
      var ekranIn = ekranInput;
     var belgi = e.target.innerText

        if(belgi == 'AC'){
            ekranIn.value = '';
        }
        else if(belgi == '='){
          ekranIn.value = (eval(ekranIn.value))
        }
        else{
            ekranInput.value += belgi;
        }


     ekranIn.classList.add('infocus')
     

     

    })
})

