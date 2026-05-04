function Form() {
    return <div className="card p-2 m-4">
        <form>
            <div className="mb-3">
                <label for="articleTitle" className="form-label p-2">Aggiungi un nuovo articolo</label>
                <input type="articleTitle" className="form-control" id="articleTitle" aria-describedby="articleTitle" />
                <div id="articleTitle" className="form-text">Inserisci il titolo del tuo articolo.</div>
            </div>
            <div class="form-floating">
                <textarea className="form-control" placeholder="Il tuo articolo" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Scrivi il tuo articolo...</label>
            </div>
            <div className="my-3">
                <button type="submit" class="btn btn-primary">Aggiungi</button>
            </div>
        </form>
    </div>
}
export default Form