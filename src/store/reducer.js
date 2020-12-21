const data = {
  todos: [],
  input: "",
  inputin: "",
  li: "block",
  index: "",
  update: "none",
  editbuttdis: "block",
  liclassname: "",
  input2val: "",
  editbutttest: "",
};

const reducer = (state, action) => {
  state = state || data;

  switch (action.type) {
    case "inputchange":
      return {
        ...state,
        input: action.payload,
      };

    case "addtask":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "inputin":
      return {
        ...state,
        inputin: action.payload,
      };
    case "clearinp":
      return {
        ...state,
        input: action.payload,
      };
    case "li":
      return {
        ...state,
        li: action.payload,
      };
    case "removetask":
      return {
        ...state,
        todos: [...action.payload],
      };
    case "index":
      return {
        ...state,
        index: action.payload,
      };
    case "update":
      return {
        ...state,
        update: action.payload,
      };
    case "editbuttdis":
      return {
        ...state,
        editbuttdis: action.payload,
      };
    case "liclassname":
      return {
        ...state,
        liclassname: action.payload,
      };
    case "removablesame":
      return {
        ...state,
        removable: action.payload,
      };
    case "editbutttest":
      return {
        ...state,
        editbutttest: action.payload,
      };
    case "input1":
      return {
        ...state,
        input2val: action.payload,
      };

    case "input2":
      const arr = state.todos;
      const arr1 = arr.slice(0, action.payload);
      const arr2 = arr.slice(action.payload + 1);
      return {
        ...state,
        todos: [...arr1, state.input2val, ...arr2],
      };

    default:
      return state;
  }
};

export default reducer;
