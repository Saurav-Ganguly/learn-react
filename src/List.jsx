import PropTypes from 'prop-types';

function List(props) {
    const items = props.items;
    const category = props.category;

    const listItems = items.map(item => <li key={item.id}>{item.name}</li>);

    return (
        <>
            <h3 className="category-title">
                {category}
            </h3>
            <ol className="item-list">
                {listItems}
            </ol>
        </>
        
    );
}
//defining the prop types for the items and category
List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired
    })),
    category: PropTypes.string,
};

//setting the default props for the items and category
List.defaultProps = {
    items: [],
    category: 'No category'
};

export default List;