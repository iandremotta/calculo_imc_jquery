$(function(){
    $('button').bind('click', function(){
        let casasdDecimais = 2;
        let altura = $('#altura').val();
        let peso = $('#peso').val();

        altura = altura.replace(',','.');
        peso = peso.replace(',','.');
        imc = peso/(altura*altura);

        if(imc <16){
            let traducao = "Baixo peso muito grave";
        } else if(imc>=16 && imc < 16){
            let traducao = "Baixo peso grave";
        } else if (imc >=17 && imc <18.49){
            var traducao = "Baixo peso";
        } else if (imc >= 18.50 && imc <24.99){
            var traducao = "Peso normal";
        } else if (imc >= 25.50 && imc <29.99){
            var traducao = 'Sobrepeso';
        } else if (imc >= 30 && imc <34.99){
            var traducao = "Obesidade grau I";
        } else if (imc >= 35 && imc <39.99){
            var traducao = "Obesidade grau II";
        } else if (imc >= 40){
            var traducao = "Obesidade grau III";
        }

        $('#resultado').html("Seu IMC é: " +imc.toFixed(casasdDecimais)+ "kg/m² e seu status é " +traducao);
    });
});