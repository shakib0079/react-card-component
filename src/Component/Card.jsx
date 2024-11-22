import './Card.css';

function Card({image, content, userImg, name, date}){
    return (
        <>
            <div className="card-container">
                <img src={image} alt="" className="card-image" />
                <p className="card-content">{content}</p>
                <div className="card-userSection">
                    <img src={userImg} alt="" className="card-userSection-image" />
                    <div className="card-namedate-section">
                        <span className="name-section">{name}</span>
                        <span className="date-section">{date}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;