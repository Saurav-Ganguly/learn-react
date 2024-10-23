

function Button() {

    const styles = {
        backgroundColor: 'red',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
    }
    let count = 0

    const handleClick = (e) => {
        e.target.textContent = 'Ouch!';
    }

    const handleDoubleClick = (e) => {
        e.target.textContent = 'I was double clicked';
    }

    return <button style={styles}
        onClick={(e)=>handleClick(e)}
        onDoubleClick = {(e) => handleDoubleClick(e)}    
        >
        Click me
    </button>;
}

export default Button;