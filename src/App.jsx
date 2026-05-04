import { useState } from "react";
import Card from "./components/Card";
import initialArticles from "./data/articles";
import Form from "./components/Form";

function App() {
  // funzione clickhandler per eliminare articolo
  const removeArticleById = (id) => {
    // filter restituisce un nuovo array senza l'elemento da rimuovere
    const filteredArticles = setArticles.filter(article => article.id !== id);
    seArticle(filteredArticles);
  };
  {/** trasformo array statico in uno stato */ }
  const [articles, setArticles] = useState(initialArticles); // attribuisdco valore iniziale di articles

  {/** la mia funzione per aggiungere nuovo oggetto ad array 2 */ }
  const addArticle = (newArticle) => {
    const articleWithId = {
      ...newArticle,
      id: crypto.randomUUID()
    }
    {/** Aggiorno stat ocreando nuovo array */ }
    setArticles([...articles, articleWithId]);
  };



  {/** Generazione delle card da obj array di articles.js */ }
  const articleCardList = articles.map(article => { //mappo lo stato, non import fisso
    return <li key={article.id || crypto.randomUUID()}>
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
    <Form onAddArticle={addArticle} />
    {/** aggiungo un p per aiutarmi a loggare i valori che mi servono */}
    <p className="px-4"></p>
  </div>
}
export default App;
