import { FC } from "react";
import { themes, Themes } from "../utils/theme";
import Switch from "react-switch";
import { useState } from "react";
import { useEffect } from "react";
import LightIcon from "../img/light_icon.png";
import DarkIcon from "../img/dark_icon.png";
import styled from "styled-components";

export interface Props {
  theme: Themes;
  setTheme: React.Dispatch<React.SetStateAction<Themes>>;
}

const LightSwitchIcon = styled.img`
  height: 80%;
  padding: 10%;
  color: black;
`
const DarkSwitchIcon = styled.img`
  height: 80%;
  padding: 10%;
  color: white;
`

export const ThemeSwitch: FC<Props> = ({theme, setTheme}: Props) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
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
      onColor={themes.dark.primary}
      onHandleColor={themes.light.primary}
      offColor={themes.light.primary}
      offHandleColor={themes.dark.primary}
      checkedIcon={<DarkSwitchIcon src={DarkIcon} alt="Thème sombre"/>}
      uncheckedIcon={<LightSwitchIcon src={LightIcon} alt="Thème clair"/>}
    />
  );
};
