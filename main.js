function contar(){
	let ini= document.getElementById('txti')
    let fim= document.getElementById('txtf')
    let passo= document.getElementById('txtp')
    let res= document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    	window.alert('Fudeu')

    } else {
    	res.innerHTML='Contando:<br>'
    	let i= Number(ini.value)
    	let f= Number(fim.value)
    	let p= Number(passo.value)

    	if(p <=0){
    		window.alert('Passo invalido! Consideraremos PASSO 1 agora')
    		p=1
    	       }
    		/**
    		 * Fors: Ambos terão a  função de pegar n numero e contar ate o n fim, alem de mostrar na tela.Um é crescente e outro nao
    		 * @param   let c será o contador       
    		 * @return   Vai retornar uma sequencia decrescente ou crescente e mostrar eles na tela
    		 */
    	
    	if(i<f){
            /*
    		 let c=i
            while( c <= f){
                res.innerHTML+=`${  c  } `
                c+=p
             } */
            
    		for(let c = i; c <= f; c += p) {
    		res.innerHTML+=`${  c  } `
    	        }
 		}else{
                
 			for ( let c= i; c >= f; c-=p) {
 				res.innerHTML+= ` ${ c } `	
 			} 
            /*
            let c=i
            while( c >= f){
                res.innerHTML+=`${  c  } `
                c-=p
            */
 		    }
 		 }
 }
