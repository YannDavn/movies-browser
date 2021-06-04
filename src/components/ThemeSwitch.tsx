import { FC } from "react";
import { Themes } from "../utils/theme";
import Switch from "react-switch";
import { useState } from "react";
import { useEffect } from "react";
import LightIcon from "../img/light_icon.png";
import DarkIcon from "../img/dark_icon.png";

export interface Props {
  theme: Themes;
  setTheme: React.Dispatch<React.SetStateAction<Themes>>;
}

export const ThemeSwitch: FC<Props> = ({theme, setTheme}: Props) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    console.log('ui');
    if (checked) {
      setTheme(Themes.dark);
    } else {
      setTheme(Themes.light);
    }
  }, [checked, setTheme]);
  return (
    <Switch
      checked={checked}
      onChange={setChecked}
      checkedIcon={<img src={DarkIcon} alt="Thème sombre"/>}
      uncheckedIcon={<img src={LightIcon} alt="Thème clair"/>}
    />
  );
};
