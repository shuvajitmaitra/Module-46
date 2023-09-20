import { useEffect, useRef } from "react";

const FormRef = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmitButton = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <div>
      <form
        className="bg-slate-400  flex flex-col items-center"
        onSubmit={handleSubmitButton}
      >
        <input
          defaultValue={"Your Name"}
          ref={nameRef}
          type="text"
          name="name"
          id=""
          className="border-2 border-black"
        />
        <br />
        <input
          defaultValue={"example@gmail.com"}
          ref={emailRef}
          type="email"
          name="email"
          id=""
          className="border-2 border-black"
        />
        <br />
        <input
          ref={passwordRef}
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
    </div>
  );
};

export default FormRef;
