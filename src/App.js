import { useState } from "react";
import Main from "./main";
import "./App.css";

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    function login() {
        const url = "http:localhost:3000/login";
        const data = { email, password };

        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        fetch(url, config)
            .then((res) => res.json())
            .then((result) => {
                if (!result.user) alert("Login failed");
                console.log("Success", result);
                localStorage.setItem("token", result.token);
                localStorage.setItem("user", JSON.stringify(result.user));
                setUser(result.user);
            })
            .catch((e) => console.log(e));

        return (
            <div className="App">
                <Main />
            </div>
        );
    }
}
export default App;
