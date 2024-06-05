export default function Card( { title, image, price, rating } ) {
    return (
        <div className="card">
            <div className="title">{title}</div>
            <img className="image" alt={title} src={image} style={{width: '100px', height: 'auto'}}></img>
            <div className="price">{price}</div>
            <div className="rating">{rating.rate}/5 ({rating.count})</div>
        </div>
    )
}