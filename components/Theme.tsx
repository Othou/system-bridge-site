import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { deepPurple, grey } from "@material-ui/core/colors";

let theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      dark: deepPurple[800],
      main: deepPurple[700],
      light: deepPurple[600],
    },
    secondary: deepPurple,
    background: {
      default: grey[900],
      paper: "#292929",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  overrides: {
    MuiCard: {
      root: {
        margin: 8,
      },
    },
    MuiCardContent: {
      root: {
        padding: "24px 32px",
        "&:last-child": {
          paddingBottom: 16,
        },
      },
    },
    MuiChip: {
      root: {
        margin: 4,
      },
    },
    MuiCardActions: {
      root: {
        justifyContent: "flex-end",
      },
    },
    MuiTypography: {
      h2: {
        textAlign: "center",
        fontSize: "3.25rem",
      },
      h3: {
        marginTop: 64,
      },
      subtitle1: {
        textAlign: "center",
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
