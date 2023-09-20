import { useState } from "react";

const StateFulForm = () => {
  const [name, setName] = useState("name");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmitButton = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    if (setPassword.length < 8) {
      setError("Password must be 8 character");
    } else {
      setError("");
    }
  };
  const changeOfName = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

  const changeOfEmail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const changeOfPassword = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };
  return (
    <div>
      <form
        className="bg-slate-400  flex flex-col items-center"
        onSubmit={handleSubmitButton}
      >
        <input
          value={name}
          onChange={changeOfName}
          type="text"
          name="name"
          id=""
          className="border-2 border-black"
        />
        <br />
        <input
          onChange={changeOfEmail}
          type="email"
          name="email"
          id=""
          className="border-2 border-black"
        />
        <br />
        <input
          onChange={changeOfPassword}
          type="password"
          name="password"
          id=""
          className="border-2 border-black"
        />
        <br />
        <input
          type="submit"
          value="submit"
          className="p-3 bg-red-400 rounded-lg"
        />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default StateFulForm;
