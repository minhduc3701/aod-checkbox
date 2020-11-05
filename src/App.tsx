import React from "react";
import "./App.css";
import { Toggle } from "aod-dependencies/Toggle";
import { initializeIcons } from "aod-dependencies/@uifabric/icons";
import { Wrapper } from "./AppStyle";
import CustomCheckBox from "aod-dependencies/Checkbox/CustomCheckBox";

initializeIcons();

function App() {
  const [darkMode, setDarkMode] = React.useState<string>("");
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const [indeterminate, setIndeterminate] = React.useState<boolean>(false);
  const [checked, setChecked] = React.useState<boolean>(false);
  const onChangeMode = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
    }
    if (darkMode !== "dark") {
      setDarkMode("dark");
    }
  };
  const onChangeDisable = () => {
    setDisabled(!disabled);
  };
  const onChangeIndeterminate = () => {
    setIndeterminate(!indeterminate);
  };

  const onChangedChecked = (
    ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
    checked?: boolean
  ): void => {
    if (checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  return (
    <div className="App">
      <Wrapper theme={darkMode}>
        <div className="toggle-wrapper">
          <Toggle label="Dark mode" onChange={onChangeMode} />
          <Toggle label="Disable" onChange={onChangeDisable} />
          <Toggle
            disabled={checked}
            label="Indeterminate"
            onChange={onChangeIndeterminate}
          />
        </div>
        <CustomCheckBox
          label="Check box"
          //<CheckBoxDarkMode>
          darkMode={darkMode}
          //</CheckBoxDarkMode>
          indeterminate={indeterminate}
          disabled={disabled}
          onChange={onChangedChecked}
          // icon={{ iconName: "Delete" }}
        />
      </Wrapper>
    </div>
  );
}

export default App;
