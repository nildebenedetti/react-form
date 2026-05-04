import { useState } from "react";
import Card from "./components/Card";
import initialArticles from "./data/articles";
import Form from "./components/Form";

function App() {


  {/** Generazione delle card da obj array di articles.js */ }
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
    <Form />
    {/** aggiungo un p per aiutarmi a loggare i valori che mi servono */}
    <p className="px-4"></p>
  </div>
}
export default App;
