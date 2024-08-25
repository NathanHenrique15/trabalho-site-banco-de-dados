const nome=['Inglês','Português','Quimica','Matemática','Geografia','Biologia',]

function carrega(){
    for(var item in nome){
        if((item % 2)==0){
            $('#esq').append('<div class="caixa"><a href="'+nome[item]+'.html"><img src="img/'+nome[item]+'.png"alt="'+nome[item]+'" class="imagem"></a></div>');
        }else{
            $('#dir').append('<div class="caixa"><a href="'+nome[item]+'.html"><img src="img/'+nome[item]+'.png"alt="'+nome[item]+'" class="imagem"></a></div>');
        }
    }
}
        
