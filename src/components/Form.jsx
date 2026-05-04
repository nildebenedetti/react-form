import { useState } from "react";

function Form() {
    // Funzione eventHandler: quando submit:
    // crea un oggetto
    // crea una updated article list e incodamelo li dentro
    // cancella tutti i valori (con oggetto empty user?)
    /*const createArticle = (event) => { // al verificarsi dell'evento
        const target = event.target // identifico il target
        const targetValue = target.value // salvo il valore inserito da utente
        const targetName = target.name //salvo la proprieta'da aggiornare

        if ( targetName === 'title') 

    }*/

    // funzione per Submit
    const formSubmitHandler = ( e ) => {
        e.preventDefault();

        // creo oggetto articolo
        const newArticle = {
            title: titolo, // inserisco input form
            body: corpo, // inserisco input form
            id: crypto.randomUUID()
        }
    }

    // inserisco variabile di stato con stringa vuota per il titolo
    const [titolo, setTitolo] = useState('');
    // inserisco variabile di stato con stringaa vuota per il corpo articolo
    const [corpo, setCorpo] = useState('');
'
    }

    return <div className = "card p-2 m-4" >
            <form>
                <div className="mb-3">
                    <label htmlFor="articleTitle" className="form-label p-2">Aggiungi un nuovo articolo</label>
                    <input type="text" onChange={e => { setTitolo(e.target.value) }} value={titolo} className="form-control" id="articleTitle" aria-describedby="articleTitle" />
                    <div id="articleTitle" className="form-text">Inserisci il titolo del tuo articolo.</div>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" onChange={e => { setCorpo(e.target.value) }} value={corpo} placeholder="Il tuo articolo" id="floatingTextarea"></textarea>
                    <label htmlFor="floatingTextarea">Scrivi il tuo articolo...</label>
                </div>
                <div className="my-3">
                    <button type="submit" className="btn btn-primary">Aggiungi</button>
                </div>
            </form>
    </div >
}
export default Form;