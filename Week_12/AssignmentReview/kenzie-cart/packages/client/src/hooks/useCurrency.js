const { createContext, useReducer, useEffect, useContext } = require("react");

const initialState = {
  symbol: "$",
  factor: 1,
};

const switchTable = {
  $: {
    symbol: "€",
    factor: 0.8,
  },
  "€": {
    symbol: "$",
    factor: 1,
  },
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "TOGGLE_CURRENCY":
      return switchTable[state.symbol];
    case "INIT_SAVED_CURRENCY":
      return payload;
    case "UPDATE_SAVED_CURRENCY":
      localStorage.setItem("KCCurrency", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

const currencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const savedCurrency =
      JSON.parse(localStorage.getItem("KCCurrency")) || false;

    if (savedCurrency) {
      dispatch({
        type: "INIT_SAVED_CURRENCY",
        payload: savedCurrency,
      });
    }
  }, []);

  useEffect(() => {
    dispatch({
      type: "UPDATE_SAVED_CURRENCY",
    });
  }, [state]);

  return (
    <currencyContext.Provider value={{ state, dispatch }}>
      {children}
    </currencyContext.Provider>
  );
};

const useCurrency = () => {
  const { state, dispatch } = useContext(currencyContext);

  const toggleCurrency = () => {
    dispatch({ type: "TOGGLE_CURRENCY" });
  };

  const getPrice = (price) => {
    const convertedPrice = price * state.factor;
    return `${state.symbol}${convertedPrice.toFixed(2)}`;
  };

  return {
    currency: state,
    ...state,
    toggleCurrency,
    getPrice,
  };
};

export default useCurrency;
