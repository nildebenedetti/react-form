import { useState } from "react";
import Card from "./components/Card";
import articles from "./data/articles";
import Form from "./components/Form";

function App() {
    // inserisco variabile di stato con stringa vuota per il titolo
    const [ titolo, setTitolo ] = useState('');
    // inserisco variabile di stato con stringaa vuota per il corpo articolo
    const [ corpo, setCorpo ] = useState('');
  
  {/** Generazione delle card da obj array di articles.js */}
  const articleCardList = articles.map(article => {
    return <li key={crypto.randomUUID()}>
      <Card
        title={article.title}
        body={article.body}
      />
    </li>
  })
  return <div>
      {/** la lista delle card valorizzate con i dati degli oggetti in articles.js */}
    <ul className="list-unstyled">
      {articleCardList}
    </ul>
    {/** sezione della card contentent il form */}
    <div className="card p-2 m-4">
      <form>
        <div className="mb-3">
          <label htmlFor="articleTitle" className="form-label p-2">Aggiungi un nuovo articolo</label>
          <input type="text" onChange={ e => { setTitolo(e.target.value) }} value={titolo} className="form-control" id="articleTitle" aria-describedby="articleTitle" />
          <div id="articleTitle" className="form-text">Inserisci il titolo del tuo articolo.</div>
        </div>
        <div className="form-floating">
          <textarea className="form-control" onChange={ e => { setCorpo(e.target.value) }} value={corpo}placeholder="Il tuo articolo" id="floatingTextarea"></textarea>
          <label htmlFor="floatingTextarea">Scrivi il tuo articolo...</label>
        </div>
        <div className="my-3">
          <button type="submit" className="btn btn-primary">Aggiungi</button>
        </div>
      </form>
    </div>
    {/** aggiungo un p per aiutarmi a loggare i valori che mi servono */}
    <p className="px-4">PER LA SCIENZA DEL DEBUG <br></br> il valore di corpo: {corpo}</p>
  </div>
}
export default App;
