function Card({
    title = "Il titolo del mio articolo",
    body = "Il corpo del mio articolo"
}) {
    return <div className="card p-2 m-4">
        <div className="d-flex justify-content-end mt-3">
          <button type="button" className="btn btn-outline-danger">
            {/* Esempio con l'icona del cestino (trash) */}
            <i className="bi bi-trash3 me-2"></i>
            Elimina
          </button>
        </div>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{body}</p>
        </div>
    </div>
}
export default Card