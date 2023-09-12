import { useState } from "react";
// import './App.css';
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};

function App() {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [text, setText] = useState("");
    const [email, setEmail] = useState(""); // State for email
    const [name, setName] = useState(""); // State for name

    const stars = Array(5).fill(0);

    const handleClick = (value) => {
        setCurrentValue(value);
    };

    const handleMouseOver = (newHoverValue) => {
        setHoverValue(newHoverValue);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value); // Update email state
    };

    const handleNameChange = (event) => {
        setName(event.target.value); // Update name state
    };

    const handleSubmit = () => {
        // Display the rating, text, email, and name in the console
        console.log("Rating:", currentValue);
        console.log("Text:", text);
        console.log("Email:", email);
        console.log("Name:", name);
    };

    return (
        <div>
        <div style={styles.container}>
            <h2 className="text-base font-medium my-4">Please rate and comment</h2>
            <div style={styles.stars}>
                {stars.map((_, index) => {
                    return (
                        <FaStar
                            key={index}
                            size={24}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                            style={{
                                marginRight: 10,
                                cursor: "pointer"
                            }}
                        />
                    );
                })}
            </div>
            <input
                type="text"
                placeholder="Name"
                style={styles.input}
                onChange={handleNameChange}
            />
            <input
                type="email"
                placeholder="Email"
                style={styles.input}
                onChange={handleEmailChange}
            />
            <textarea
                placeholder="What's your experience?"
                style={styles.textarea}
                onChange={handleTextChange}
            />
            <button style={styles.button} onClick={handleSubmit}>Submit</button>
        </div>

            {/* <p className='font-bold text-xs my-3'>see others comments</p> */}
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "20px"
    },
    stars: {
        display: "flex",
        flexDirection: "row",
        marginBottom: "20px"
    },
    input: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        padding: 10,
        margin: "10px 0",
        minWidth: 250,
    },
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        padding: 10,
        margin: "10px 0",
        minHeight: 100,
        minWidth: 250
    },
    button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        minWidth: 250,
        padding: 10,
    }
};

export default App;
