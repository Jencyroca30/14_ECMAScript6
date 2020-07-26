
document.forms.myForm.onchange= outputCal; 
function outputCal() {
    
    //console.log(event.target); 

    function docId() {
        let r = document.querySelector(arguments[0]);
        if(r.checked) {
            return true;
        }

        return r.value;

        
    }
    let generomas = docId('#m'); 
    let sex = generomas === true ? 'male' : 'female';

    const data = {
        peso: docId('#weigth'),
        altura:docId('#heigth'),
        pie:(docId('#hfeet')*12)+(docId('#heigth')),
        edad: docId('#age'),
        sexo: sex,
        estilo:(docId('#lifes')* 0.2)+1
    }
let result= generomas?data.estilo*(66+(6.2*data.peso)+(12.7 * data.altura)-(6.76*data.edad)):data.estilo*(655.1+(4.35*data.peso)+(4.7*data.altura)-(4.7*data.edad)) 
    console.log(Math.round(result)); 
    
}




