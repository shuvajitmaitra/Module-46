import useInputState from "../Hooks/useInputState";

const HookForm = () => {
  const [value, changeOf] = useInputState("sojoni");

  const handleSubmitButton = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <div>
      <form
        className="bg-slate-400  flex flex-col items-center"
        onSubmit={handleSubmitButton}
      >
        <input
          value={value}
          onChange={changeOf}
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
          name="text"
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
};

export default HookForm;
