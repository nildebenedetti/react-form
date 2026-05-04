import { useState } from "react";




function Form() {
    function setTitle() {
    // inserisco una funzione per settare il titolo
    const [ title, setTitle] = useState('');
}

    return <div className="card p-2 m-4">
        <form>
            <div className="mb-3">
                <label value={title} htmlFor="articleTitle" className="form-label p-2">Aggiungi un nuovo articolo</label>
                <input type="text" className="form-control" id="articleTitle" aria-describedby="articleTitle" />
                <div id="articleTitle" className="form-text">Inserisci il titolo del tuo articolo.</div>
            </div>
            <div className="form-floating">
                <textarea className="form-control" placeholder="Il tuo articolo" id="floatingTextarea"></textarea>
                <label htmlFor="floatingTextarea">Scrivi il tuo articolo...</label>
            </div>
            <div className="my-3">
                <button type="submit" className="btn btn-primary">Aggiungi</button>
            </div>
        </form>
    </div>
}
export default Form