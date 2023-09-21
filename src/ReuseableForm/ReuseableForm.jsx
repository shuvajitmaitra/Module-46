const ReuseableForm = ({
  formTitle,
  btnText = "Submit",
  handleSubmitButton,
  children,
}) => {
  const handleLocalButton = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmitButton(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">{children}</h1>
      <form
        className="bg-slate-400  flex flex-col items-center"
        onSubmit={handleLocalButton}
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
          type="password"
          name="password"
          id=""
          className="border-2 border-black"
        />
        <br />
        <input
          type="submit"
          value={btnText}
          className="p-3 bg-red-400 rounded-lg"
        />
      </form>
    </div>
  );
};

export default ReuseableForm;
