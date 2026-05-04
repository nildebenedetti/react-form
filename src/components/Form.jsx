import { useState } from "react";

function Form( {onAddArticle}) {

    // funzione per Submit
    const formSubmitHandler = ( e ) => {
        e.preventDefault();

        // creo oggetto articolo
        const newArticle = {
            title: titolo, // inserisco input form
            body: corpo, // inserisco input form)
        }
        //  chiamo la prop di App.jsx
        onAddArticle(newArticle);

        // svuoto campi
        setTitolo('');
        setCorpo('');
    };

    // inserisco variabile di stato con stringa vuota per il titolo
    const [titolo, setTitolo] = useState('');
    // inserisco variabile di stato con stringaa vuota per il corpo articolo
    const [corpo, setCorpo] = useState('');
    

    return <div className = "card p-2 m-4" >
            <form onSubmit={formSubmitHandler}>
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