import FormContextProvider from "./context/FormContextProvider";
import AppRoutes from "./routes";

function App() {
  return (
    <FormContextProvider>
      <AppRoutes />
    </FormContextProvider>
  );
}

export default App;
