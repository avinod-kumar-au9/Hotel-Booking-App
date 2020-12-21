const Form = (props) => {
  const { forminfo, submitHandler, inputHandler } = props;
  return (
    <form>
      <label>Name</label>
      <input
        name={forminfo.name.name}
        value={forminfo.name.value}
        onChange={(e) => inputHandler(e.target.name, e.target.value)}
      ></input>
      <span style={{ border: forminfo.name.value ? " red" : "1px solid red" }}>{forminfo.name.error}</span>


      <label>Password</label>
      <input
        type="password"
        name={forminfo.password.name}
        value={forminfo.password.value}
        onChange={(e) => inputHandler(e.target.name, e.target.value)}
      ></input>

      <span style={{ border: forminfo.password.value ? "  red" : "1px solid red" }}>
        {forminfo.password.error}
      </span>
      <input
        type="checkbox"
        id="check"
        //   onChange={changehandler}

        name={forminfo.checkbox.name}
        checked={forminfo.checkbox.value}
        onChange={(e) => inputHandler(e.target.name, e.target.checked)}
      ></input>
      <label>CheckBox</label>

      <input
        type="file"
        // placeholder="Profile Image"
        // name={formInfo.image.name}
        // value={formInfo.image.value}
        onChange={(e) => {
          inputHandler(e.target.name, e.target.files[0]);
        }}
      />
      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
    </form>
  );
};

export default Form;
