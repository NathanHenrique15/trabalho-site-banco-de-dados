const nome=['natan', 'kaue', 'penenanete','zé1','zé2','zé3','zé4']

function carrega(){
    for(var item in nome) {
        if((item % 2)==0){
            $('#esq').append('<div class="caixa"><h1>'+nome[item]+'</h1></div>');
        }else{
            $('#dir').append('<div class="caixa"><h1>'+nome[item]+' </h1></div>');
        }
        
    }   
   
}