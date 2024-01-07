import "./buttonStyles.css";

export default function Button(props) {
    const { onClick, value, link } = props;

    if (onClick) {
        return (
            <button onClick={onClick} className="button">
                {value}
            </button>
        );
    } else if (link) {
        return (
            <a href={link} className="button">
                {value}
            </a>
        );
    }
}

// export function ButtonSecondary(props) {
//     const { onClick, value, link } = props;

//     if (onClick) {
//         return (
//             <button onClick={onClick} className="button button--secondary">
//                 {value}
//             </button>
//         );
//     } else if (link) {
//         return (
//             <a href={link} className="button button--secondary">
//                 {value}
//             </a>
//         );
//     }
// }
