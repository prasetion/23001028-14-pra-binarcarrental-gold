import Button from "./components/Button/Index";

const App = () => {
  const testClick = () => {
    console.log("test");
  };

  return (
    <div>
      <Button name={"test"} callback={testClick()}></Button>
    </div>
  );
};

export default App;
