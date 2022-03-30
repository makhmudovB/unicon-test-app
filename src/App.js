import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { persistor, store } from "./redux/rootConfig";
import RouterSwitcher from "./common/routesSwitcher";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterSwitcher />
      </PersistGate>
    </Provider>
  );
};

export default App;
