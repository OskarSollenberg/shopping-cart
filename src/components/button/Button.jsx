import "./buttonStyles.css";

export default function Button(props) {
    const { addItem, value } = props;
    return (
        <button className="button" onClick={addItem}>
            {value}
        </button>
    );
}
