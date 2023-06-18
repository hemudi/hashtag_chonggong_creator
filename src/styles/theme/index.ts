import { Colors, Palette, colors, palette } from "@styles/theme/colors";
import { Fonts, fonts } from "@styles/theme/fonts";
import { Mixins, mixins } from "@styles/theme/mixins";

export type CustomTheme = {
  colors: Colors;
  palette: Palette;
  fonts: Fonts;
  mixins: Mixins;
};

const theme: CustomTheme = {
  palette,
  colors,
  fonts,
  mixins,
};

export default theme;
