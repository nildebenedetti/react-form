function Card( {
    title="Il titolo del mio articolo",
    body="Il corpo del mio articolo"
}) {
  return (
    <div className="card">
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{body}</p>
  </div>
</div>
  )
}
export default Card