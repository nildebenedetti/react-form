import Card from "./components/Card";
import articles from "./data/articles";

function App() {
  const articleCardList = articles.map( article => {
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
  </div>
}
export default App;
