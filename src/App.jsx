import "./App.css";

function App() {
  const handleSubmitButton = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
    console.log("form submit");
  };
  return (
    <div>
      <form
        className="bg-slate-400  flex flex-col items-center"
        onSubmit={handleSubmitButton}
      >
        <input
          type="text"
          name="name"
          id=""
          className="border-2 border-black"
        />
        <br />
        <input
          type="email"
          name="email"
          id=""
          className="border-2 border-black"
        />
        <br />
        <input
          type="text"
          name="phone"
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
    </div>
  );
}

export default App;
