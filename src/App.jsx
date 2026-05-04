import { useState } from "react";
import Card from "./components/Card";
import articles from "./data/articles";
import Form from "./components/Form";

function App() {
    // inserisco stringa vuota per il titolo
    const [ titolo, setTitolo] = useState('');
  

  const articleCardList = articles.map(article => {
    return <li key={crypto.randomUUID()}>
      <Card
        title={article.title}
        body={article.body}
      />
    </li>
  })
  return <div>
    <ul className="list-unstyled">
      {articleCardList}
    </ul>
    <div className="card p-2 m-4">
      <form>
        <div className="mb-3">
          <label htmlFor="articleTitle" className="form-label p-2">Aggiungi un nuovo articolo</label>
          <input type="text" onChange={ e => { setTitolo(e.target.value) }} value={titolo} className="form-control" id="articleTitle" aria-describedby="articleTitle" />
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
  </div>
}
export default App;
