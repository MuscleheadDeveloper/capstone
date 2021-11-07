import React from "react";
import SearchIconButton from "./SearchIconButton.js";
import "./Search.css";
import Button from './Button'
import { useState } from "react";
import logo from "./images/logoDark.png";
import MicNoneButton from "./MicNoneButton.js";

function Search() {
  const [count, setCount] = useState('');
  function handleChange(e) {
    setCount(e.target.value);
  }

  return (
    <div className="logo_and_input__div">

      {count ? <p className="hey">{count}</p> : <img className="logo" src={logo} />}

      <label className="label__field">
        <SearchIconButton />

        <input
          className="input-field"
          type="text"
          value={count}
          onChange={handleChange}
          placeholder="Search"
        />
        <MicNoneButton />
      </label>

      <div className="_2buttons">
        <Button />
      </div>
    </div>
  );
}

export default Search;
