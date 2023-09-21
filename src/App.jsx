// import Form from "./Form/Form";
// import StateFulForm from "./StateFulForm/StateFulForm";

// import HookForm from "./HookForm/HookForm";
import ReuseableForm from "./ReuseableForm/ReuseableForm";

// import FormRef from "./FormRef/FormRef";

const App = () => {
  const handleSignUp = (data) => {
    console.log("Sign Up data: ", data);
  };

  const handleProfileUpdate = (data) => {
    console.log("Update profile data: ", data);
  };
  return (
    <div>
      {/* <Form></Form> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <FormRef></FormRef> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm formTitle={"Sign Up"} handleSubmitButton={handleSignUp}>
        <div>
          <h3>Sign Up</h3>
          <p>Sign up your profile</p>
        </div>
      </ReuseableForm>
      <ReuseableForm
        formTitle={"Update Profile"}
        btnText={"Update"}
        handleSubmitButton={handleProfileUpdate}
      >
        <div>
          <h3>Profile Update</h3>
          <p>Keep your profile updated</p>
        </div>
      </ReuseableForm>
    </div>
  );
};

export default App;
