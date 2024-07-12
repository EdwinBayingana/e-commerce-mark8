import { theme, ThemeConfig } from "antd";

const antdTheme: ThemeConfig = {
  algorithm: [theme.darkAlgorithm],
  token: {
    colorPrimary: "#C1CF16",
    colorLink: "#C1CF16",
    colorInfo: "#C1CF1650",
    borderRadius: 11,
  },
  components: {
    Menu: {
      darkItemSelectedBg: "#464A34",
    },
    Input: {
      controlHeightLG: 45,
      paddingInlineLG: 12,
    },
    Button: {
      controlHeightLG: 45,
    },
    Select: {
      controlHeight: 32,
      controlHeightLG: 45,
      controlHeightSM: 24,
    },
    InputNumber: {
      controlHeight: 32,
      controlHeightLG: 45,
      controlHeightSM: 24,
    },
    Calendar: {
      fullPanelBg: "inherit",
    },
  },
};

export default antdTheme;
