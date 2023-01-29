class LLista {
     #head
     constructor(){
        this.#head = this.#node('head')
     }

     #node(value){
        return({
            element: value,
            next: null
        })
     }

     insert(value, after){
        //colocamos nosso value em um container que tem o element que o value e o next que começa com null
        const node = this.#node(value)
        /*
            tenho que achar o after na LLista
        */ 
        const current = this.#find(after)
        node.next = current.next
        current.next = node
        /*
            estamos arrumjando os next, meu item atual vai receber o next do elemento que achamos
            e o elemento que achamos o next dele vai aponta para o nosso elemento
        */

     }
     #findPreviuos(value){
        let current = this.#head
        /*
            pegamos o current e vemos se seu next que esse next tem o seu next e o element
            e vemos se o element e diferente do nosos value
            ** não podemos pegar so o next pq o next e um node temos que fazer a verificação
            do element**
        */
        while(current.next !== null && current.next.element !== value){
            current = current.next
        }
        /*
            se o next do current o element dele fo igual ao nosso value
            a gente return ele então aqui vamos ter o node que aponta para
            nosso element que queremos remove
        */
        return current
     }
     remove(value){
        const prevNode = this.#findPreviuos(value)
        if(prevNode.next !== null){
            /*
                prevNode.next e o nosso item anterio e o next do anterior,
                ai estamos acessando o prevNode.next.next que seria o nosso next do node 
                que queremos remove 
            */
            prevNode.next = prevNode.next.next
        }

     }

     #find(valueAfter){
        /*
            procurar element na lista likada, para isso temos que descobrir qual e o 1° value
            que ja sabemos que e o head pq deixamos o 1°value static
        */
       let currentNode = this.#head
       // se encontrar nosso elemento ele sair do loop
       while(currentNode.element !== valueAfter){
        currentNode = currentNode.next
       }
       return currentNode
     }

     display(){
        let currentNode = this.#head
        while(currentNode.next !== null){
            console.log(currentNode.next.element)
            currentNode = currentNode.next
        }
     }
}

const llista = new LLista()

const fn1 = ()=>{
    return 'fn1'
}
const fn2 = ()=>{
    return 'fn2'
}

llista.insert(fn1, 'head')
llista.insert(fn2, fn1)
llista.display()
llista.remove(fn2)
llista.display()