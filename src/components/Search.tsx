
type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
};

import { useState, KeyboardEvent } from "react";

import { BsSearch } from "react-icons/bs";

import classes from "./search.module.css";



const Search = ({loadUser}: SearchProps) => {
    const [username, setUserName] = useState("");

    const handlekeyDown = (e: KeyboardEvent) =>  {
        if(e.key === "Enter") {
            loadUser(username);
        };
    };

    return (
<div className={classes.search}>
    <h2>Procure por um usuário</h2>
    <p>Seus best repositórios!</p>

<div className={classes.search_container}>

    <input type="text" placeholder="Digita o nome do usuário"
    onChange={(e) => setUserName (e.target.value)}
    onKeyDown={handlekeyDown}
     />
<button onClick={() => loadUser(username)}>

    <BsSearch />
    </button>
</div>
</div>
    );
};

export default Search;