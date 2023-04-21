import './card.styles.css';

const Card = ({ item }) => {
    return (
        <div className='card'>
            <img className='card-img' src={item.thumbnail} alt='thumbnail' />
            <p className='card-title'>{item.title}</p>
        </div>
    );
};

export default Card;