// Descrizione:
// Rifare l'esercizio della to do list.
// Ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
// BONUS extra:
// non permettere l'inserimento di todo doppie nell'array di oggetti

var app = new Vue(
    {
        el: '#root',
        data: {
            newTodo: '',
        
            todos: [
                {
                text: 'testo della todo 1',
                done: false,
            },
            {
                text: 'testo della todo 2',
                done: true,
            },
            {
                text: 'testo della todo 3',
                done: false,
            },
                
            ]
        },
        methods: {
            // doneMethods: function(){
            //     if(this.todos.done == false){
            //         this.todos.text.classList.add(".done_class");
            //     } else {
            //         this.todos.text.classList.remove(".done_class");
            //     }
            // },
            
            removeTodo: function(todoIndex) {
                //usiamo lo splice
                //elemento in base alla posizione dell'indice, quanti
                //elementi tolgiere da quella posizione
                this.todos.splice( todoIndex, 1 );
             },
             
            /* Funzione che aggiunge il testo inserito nell'input, dentro la nostr
            variabile */
            newStringUser: function(){
                let newStringObj = {
                    text: this.newTodo,
                    done: false,
                }
                if( !this.newTodo == '') {
                this.todos.push(newStringObj)

                //svuotare l'input dopo aver pushato la nuova todo
                this.newTodo = ''
            }
     
            },

            /* Funzione booleana per cambiare lo stato dell'attributo done
            legata alla condizione if ternaria scritta nel v-bind del tag <p> dell'HTML
            per rimuovere o aggiungere la classe done_class */
            doneAddRemove: function(element){
                if(element.done == true) {
                    element.done = false
                } else {
                    element.done = true
                }
            }
         },
    }
)

// && !this.todos.includes(newStringObj)