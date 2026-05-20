'use strict';

var React2 = require('react');
var nativewind = require('nativewind');
var reactNative = require('react-native');
var creator$2 = require('@gluestack-ui/core/overlay/creator');
var creator$3 = require('@gluestack-ui/core/toast/creator');
var jsxRuntime = require('react/jsx-runtime');
var creator = require('@gluestack-ui/core/button/creator');
var nativewindUtils = require('@gluestack-ui/utils/nativewind-utils');
var creator$1 = require('@gluestack-ui/core/icon/creator');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React2__default = /*#__PURE__*/_interopDefault(React2);

// components/ui/gluestack-ui-provider/index.tsx
var config = {
  light: nativewind.vars({
    "--color-primary-0": "179 179 179",
    "--color-primary-50": "153 153 153",
    "--color-primary-100": "128 128 128",
    "--color-primary-200": "115 115 115",
    "--color-primary-300": "102 102 102",
    "--color-primary-400": "82 82 82",
    "--color-primary-500": "51 51 51",
    "--color-primary-600": "41 41 41",
    "--color-primary-700": "31 31 31",
    "--color-primary-800": "13 13 13",
    "--color-primary-900": "10 10 10",
    "--color-primary-950": "8 8 8",
    /* Secondary  */
    "--color-secondary-0": "253 253 253",
    "--color-secondary-50": "251 251 251",
    "--color-secondary-100": "246 246 246",
    "--color-secondary-200": "242 242 242",
    "--color-secondary-300": "237 237 237",
    "--color-secondary-400": "230 230 231",
    "--color-secondary-500": "217 217 219",
    "--color-secondary-600": "198 199 199",
    "--color-secondary-700": "189 189 189",
    "--color-secondary-800": "177 177 177",
    "--color-secondary-900": "165 164 164",
    "--color-secondary-950": "157 157 157",
    /* Tertiary */
    "--color-tertiary-0": "255 250 245",
    "--color-tertiary-50": "255 242 229",
    "--color-tertiary-100": "255 233 213",
    "--color-tertiary-200": "254 209 170",
    "--color-tertiary-300": "253 180 116",
    "--color-tertiary-400": "251 157 75",
    "--color-tertiary-500": "231 129 40",
    "--color-tertiary-600": "215 117 31",
    "--color-tertiary-700": "180 98 26",
    "--color-tertiary-800": "130 73 23",
    "--color-tertiary-900": "108 61 19",
    "--color-tertiary-950": "84 49 18",
    /* Error */
    "--color-error-0": "254 233 233",
    "--color-error-50": "254 226 226",
    "--color-error-100": "254 202 202",
    "--color-error-200": "252 165 165",
    "--color-error-300": "248 113 113",
    "--color-error-400": "239 68 68",
    "--color-error-500": "230 53 53",
    "--color-error-600": "220 38 38",
    "--color-error-700": "185 28 28",
    "--color-error-800": "153 27 27",
    "--color-error-900": "127 29 29",
    "--color-error-950": "83 19 19",
    /* Success */
    "--color-success-0": "228 255 244",
    "--color-success-50": "202 255 232",
    "--color-success-100": "162 241 192",
    "--color-success-200": "132 211 162",
    "--color-success-300": "102 181 132",
    "--color-success-400": "72 151 102",
    "--color-success-500": "52 131 82",
    "--color-success-600": "42 121 72",
    "--color-success-700": "32 111 62",
    "--color-success-800": "22 101 52",
    "--color-success-900": "20 83 45",
    "--color-success-950": "27 50 36",
    /* Warning */
    "--color-warning-0": "255 249 245",
    "--color-warning-50": "255 244 236",
    "--color-warning-100": "255 231 213",
    "--color-warning-200": "254 205 170",
    "--color-warning-300": "253 173 116",
    "--color-warning-400": "251 149 75",
    "--color-warning-500": "231 120 40",
    "--color-warning-600": "215 108 31",
    "--color-warning-700": "180 90 26",
    "--color-warning-800": "130 68 23",
    "--color-warning-900": "108 56 19",
    "--color-warning-950": "84 45 18",
    /* Info */
    "--color-info-0": "236 248 254",
    "--color-info-50": "199 235 252",
    "--color-info-100": "162 221 250",
    "--color-info-200": "124 207 248",
    "--color-info-300": "87 194 246",
    "--color-info-400": "50 180 244",
    "--color-info-500": "13 166 242",
    "--color-info-600": "11 141 205",
    "--color-info-700": "9 115 168",
    "--color-info-800": "7 90 131",
    "--color-info-900": "5 64 93",
    "--color-info-950": "3 38 56",
    /* Typography */
    "--color-typography-0": "254 254 255",
    "--color-typography-50": "245 245 245",
    "--color-typography-100": "229 229 229",
    "--color-typography-200": "219 219 220",
    "--color-typography-300": "212 212 212",
    "--color-typography-400": "163 163 163",
    "--color-typography-500": "140 140 140",
    "--color-typography-600": "115 115 115",
    "--color-typography-700": "82 82 82",
    "--color-typography-800": "64 64 64",
    "--color-typography-900": "38 38 39",
    "--color-typography-950": "23 23 23",
    /* Outline */
    "--color-outline-0": "253 254 254",
    "--color-outline-50": "243 243 243",
    "--color-outline-100": "230 230 230",
    "--color-outline-200": "221 220 219",
    "--color-outline-300": "211 211 211",
    "--color-outline-400": "165 163 163",
    "--color-outline-500": "140 141 141",
    "--color-outline-600": "115 116 116",
    "--color-outline-700": "83 82 82",
    "--color-outline-800": "65 65 65",
    "--color-outline-900": "39 38 36",
    "--color-outline-950": "26 23 23",
    /* Background */
    "--color-background-0": "255 255 255",
    "--color-background-50": "246 246 246",
    "--color-background-100": "242 241 241",
    "--color-background-200": "220 219 219",
    "--color-background-300": "213 212 212",
    "--color-background-400": "162 163 163",
    "--color-background-500": "142 142 142",
    "--color-background-600": "116 116 116",
    "--color-background-700": "83 82 82",
    "--color-background-800": "65 64 64",
    "--color-background-900": "39 38 37",
    "--color-background-950": "18 18 18",
    /* Background Special */
    "--color-background-error": "254 241 241",
    "--color-background-warning": "255 243 234",
    "--color-background-success": "237 252 242",
    "--color-background-muted": "247 248 247",
    "--color-background-info": "235 248 254",
    /* Focus Ring Indicator  */
    "--color-indicator-primary": "55 55 55",
    "--color-indicator-info": "83 153 236",
    "--color-indicator-error": "185 28 28"
  }),
  dark: nativewind.vars({
    "--color-primary-0": "166 166 166",
    "--color-primary-50": "175 175 175",
    "--color-primary-100": "186 186 186",
    "--color-primary-200": "197 197 197",
    "--color-primary-300": "212 212 212",
    "--color-primary-400": "221 221 221",
    "--color-primary-500": "230 230 230",
    "--color-primary-600": "240 240 240",
    "--color-primary-700": "250 250 250",
    "--color-primary-800": "253 253 253",
    "--color-primary-900": "254 249 249",
    "--color-primary-950": "253 252 252",
    /* Secondary  */
    "--color-secondary-0": "20 20 20",
    "--color-secondary-50": "23 23 23",
    "--color-secondary-100": "31 31 31",
    "--color-secondary-200": "39 39 39",
    "--color-secondary-300": "44 44 44",
    "--color-secondary-400": "56 57 57",
    "--color-secondary-500": "63 64 64",
    "--color-secondary-600": "86 86 86",
    "--color-secondary-700": "110 110 110",
    "--color-secondary-800": "135 135 135",
    "--color-secondary-900": "150 150 150",
    "--color-secondary-950": "164 164 164",
    /* Tertiary */
    "--color-tertiary-0": "84 49 18",
    "--color-tertiary-50": "108 61 19",
    "--color-tertiary-100": "130 73 23",
    "--color-tertiary-200": "180 98 26",
    "--color-tertiary-300": "215 117 31",
    "--color-tertiary-400": "231 129 40",
    "--color-tertiary-500": "251 157 75",
    "--color-tertiary-600": "253 180 116",
    "--color-tertiary-700": "254 209 170",
    "--color-tertiary-800": "255 233 213",
    "--color-tertiary-900": "255 242 229",
    "--color-tertiary-950": "255 250 245",
    /* Error */
    "--color-error-0": "83 19 19",
    "--color-error-50": "127 29 29",
    "--color-error-100": "153 27 27",
    "--color-error-200": "185 28 28",
    "--color-error-300": "220 38 38",
    "--color-error-400": "230 53 53",
    "--color-error-500": "239 68 68",
    "--color-error-600": "249 97 96",
    "--color-error-700": "229 91 90",
    "--color-error-800": "254 202 202",
    "--color-error-900": "254 226 226",
    "--color-error-950": "254 233 233",
    /* Success */
    "--color-success-0": "27 50 36",
    "--color-success-50": "20 83 45",
    "--color-success-100": "22 101 52",
    "--color-success-200": "32 111 62",
    "--color-success-300": "42 121 72",
    "--color-success-400": "52 131 82",
    "--color-success-500": "72 151 102",
    "--color-success-600": "102 181 132",
    "--color-success-700": "132 211 162",
    "--color-success-800": "162 241 192",
    "--color-success-900": "202 255 232",
    "--color-success-950": "228 255 244",
    /* Warning */
    "--color-warning-0": "84 45 18",
    "--color-warning-50": "108 56 19",
    "--color-warning-100": "130 68 23",
    "--color-warning-200": "180 90 26",
    "--color-warning-300": "215 108 31",
    "--color-warning-400": "231 120 40",
    "--color-warning-500": "251 149 75",
    "--color-warning-600": "253 173 116",
    "--color-warning-700": "254 205 170",
    "--color-warning-800": "255 231 213",
    "--color-warning-900": "255 244 237",
    "--color-warning-950": "255 249 245",
    /* Info */
    "--color-info-0": "3 38 56",
    "--color-info-50": "5 64 93",
    "--color-info-100": "7 90 131",
    "--color-info-200": "9 115 168",
    "--color-info-300": "11 141 205",
    "--color-info-400": "13 166 242",
    "--color-info-500": "50 180 244",
    "--color-info-600": "87 194 246",
    "--color-info-700": "124 207 248",
    "--color-info-800": "162 221 250",
    "--color-info-900": "199 235 252",
    "--color-info-950": "236 248 254",
    /* Typography */
    "--color-typography-0": "23 23 23",
    "--color-typography-50": "38 38 39",
    "--color-typography-100": "64 64 64",
    "--color-typography-200": "82 82 82",
    "--color-typography-300": "115 115 115",
    "--color-typography-400": "140 140 140",
    "--color-typography-500": "163 163 163",
    "--color-typography-600": "212 212 212",
    "--color-typography-700": "219 219 220",
    "--color-typography-800": "229 229 229",
    "--color-typography-900": "245 245 245",
    "--color-typography-950": "254 254 255",
    /* Outline */
    "--color-outline-0": "26 23 23",
    "--color-outline-50": "39 38 36",
    "--color-outline-100": "65 65 65",
    "--color-outline-200": "83 82 82",
    "--color-outline-300": "115 116 116",
    "--color-outline-400": "140 141 141",
    "--color-outline-500": "165 163 163",
    "--color-outline-600": "211 211 211",
    "--color-outline-700": "221 220 219",
    "--color-outline-800": "230 230 230",
    "--color-outline-900": "243 243 243",
    "--color-outline-950": "253 254 254",
    /* Background */
    "--color-background-0": "18 18 18",
    "--color-background-50": "39 38 37",
    "--color-background-100": "65 64 64",
    "--color-background-200": "83 82 82",
    "--color-background-300": "116 116 116",
    "--color-background-400": "142 142 142",
    "--color-background-500": "162 163 163",
    "--color-background-600": "213 212 212",
    "--color-background-700": "229 228 228",
    "--color-background-800": "242 241 241",
    "--color-background-900": "246 246 246",
    "--color-background-950": "255 255 255",
    /* Background Special */
    "--color-background-error": "66 43 43",
    "--color-background-warning": "65 47 35",
    "--color-background-success": "28 43 33",
    "--color-background-muted": "51 51 51",
    "--color-background-info": "26 40 46",
    /* Focus Ring Indicator  */
    "--color-indicator-primary": "247 247 247",
    "--color-indicator-info": "161 199 245",
    "--color-indicator-error": "232 70 69"
  })
};
function GluestackUIProvider({
  mode = "light",
  ...props
}) {
  const { colorScheme, setColorScheme } = nativewind.useColorScheme();
  React2.useEffect(() => {
    setColorScheme(mode);
  }, [mode]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactNative.View,
    {
      style: [
        config[colorScheme],
        { flex: 1, height: "100%", width: "100%" },
        props.style
      ],
      children: /* @__PURE__ */ jsxRuntime.jsx(creator$2.OverlayProvider, { children: /* @__PURE__ */ jsxRuntime.jsx(creator$3.ToastProvider, { children: props.children }) })
    }
  );
}
var SCOPE = "BUTTON";
var Root = nativewindUtils.withStyleContext(reactNative.Pressable, SCOPE);
var UIButton = creator.createButton({
  Root,
  Text: reactNative.Text,
  Group: reactNative.View,
  Spinner: reactNative.ActivityIndicator,
  Icon: creator$1.UIIcon
});
nativewind.cssInterop(creator$1.PrimitiveIcon, {
  className: {
    target: "style",
    nativeStyleToProp: {
      height: true,
      width: true,
      fill: true,
      color: "classNameColor",
      stroke: true
    }
  }
});
var buttonStyle = nativewindUtils.tva({
  base: "group/button rounded bg-primary-500 flex-row items-center justify-center data-[focus-visible=true]:web:outline-none data-[focus-visible=true]:web:ring-2 data-[disabled=true]:opacity-40 gap-2",
  variants: {
    action: {
      primary: "bg-primary-500 data-[hover=true]:bg-primary-600 data-[active=true]:bg-primary-700 border-primary-300 data-[hover=true]:border-primary-400 data-[active=true]:border-primary-500 data-[focus-visible=true]:web:ring-indicator-info",
      secondary: "bg-secondary-500 border-secondary-300 data-[hover=true]:bg-secondary-600 data-[hover=true]:border-secondary-400 data-[active=true]:bg-secondary-700 data-[active=true]:border-secondary-700 data-[focus-visible=true]:web:ring-indicator-info",
      positive: "bg-success-500 border-success-300 data-[hover=true]:bg-success-600 data-[hover=true]:border-success-400 data-[active=true]:bg-success-700 data-[active=true]:border-success-500 data-[focus-visible=true]:web:ring-indicator-info",
      negative: "bg-error-500 border-error-300 data-[hover=true]:bg-error-600 data-[hover=true]:border-error-400 data-[active=true]:bg-error-700 data-[active=true]:border-error-500 data-[focus-visible=true]:web:ring-indicator-info",
      default: "bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent"
    },
    variant: {
      link: "px-0",
      outline: "bg-transparent border data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent",
      solid: ""
    },
    size: {
      xs: "px-3.5 h-8",
      sm: "px-4 h-9",
      md: "px-5 h-10",
      lg: "px-6 h-11",
      xl: "px-7 h-12"
    }
  },
  compoundVariants: [
    {
      action: "primary",
      variant: "link",
      class: "px-0 bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent"
    },
    {
      action: "secondary",
      variant: "link",
      class: "px-0 bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent"
    },
    {
      action: "positive",
      variant: "link",
      class: "px-0 bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent"
    },
    {
      action: "negative",
      variant: "link",
      class: "px-0 bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent"
    },
    {
      action: "primary",
      variant: "outline",
      class: "bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent"
    },
    {
      action: "secondary",
      variant: "outline",
      class: "bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent"
    },
    {
      action: "positive",
      variant: "outline",
      class: "bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent"
    },
    {
      action: "negative",
      variant: "outline",
      class: "bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent"
    }
  ]
});
var buttonTextStyle = nativewindUtils.tva({
  base: "text-typography-0 font-semibold web:select-none",
  parentVariants: {
    action: {
      primary: "text-primary-600 data-[hover=true]:text-primary-600 data-[active=true]:text-primary-700",
      secondary: "text-typography-500 data-[hover=true]:text-typography-600 data-[active=true]:text-typography-700",
      positive: "text-success-600 data-[hover=true]:text-success-600 data-[active=true]:text-success-700",
      negative: "text-error-600 data-[hover=true]:text-error-600 data-[active=true]:text-error-700"
    },
    variant: {
      link: "data-[hover=true]:underline data-[active=true]:underline",
      outline: "",
      solid: "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0"
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl"
    }
  },
  parentCompoundVariants: [
    {
      variant: "solid",
      action: "primary",
      class: "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0"
    },
    {
      variant: "solid",
      action: "secondary",
      class: "text-typography-800 data-[hover=true]:text-typography-800 data-[active=true]:text-typography-800"
    },
    {
      variant: "solid",
      action: "positive",
      class: "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0"
    },
    {
      variant: "solid",
      action: "negative",
      class: "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0"
    },
    {
      variant: "outline",
      action: "primary",
      class: "text-primary-500 data-[hover=true]:text-primary-500 data-[active=true]:text-primary-500"
    },
    {
      variant: "outline",
      action: "secondary",
      class: "text-typography-500 data-[hover=true]:text-primary-600 data-[active=true]:text-typography-700"
    },
    {
      variant: "outline",
      action: "positive",
      class: "text-primary-500 data-[hover=true]:text-primary-500 data-[active=true]:text-primary-500"
    },
    {
      variant: "outline",
      action: "negative",
      class: "text-primary-500 data-[hover=true]:text-primary-500 data-[active=true]:text-primary-500"
    }
  ]
});
var buttonIconStyle = nativewindUtils.tva({
  base: "fill-none",
  parentVariants: {
    variant: {
      link: "data-[hover=true]:underline data-[active=true]:underline",
      outline: "",
      solid: "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0"
    },
    size: {
      xs: "h-3.5 w-3.5",
      sm: "h-4 w-4",
      md: "h-[18px] w-[18px]",
      lg: "h-[18px] w-[18px]",
      xl: "h-5 w-5"
    },
    action: {
      primary: "text-primary-600 data-[hover=true]:text-primary-600 data-[active=true]:text-primary-700",
      secondary: "text-typography-500 data-[hover=true]:text-typography-600 data-[active=true]:text-typography-700",
      positive: "text-success-600 data-[hover=true]:text-success-600 data-[active=true]:text-success-700",
      negative: "text-error-600 data-[hover=true]:text-error-600 data-[active=true]:text-error-700"
    }
  },
  parentCompoundVariants: [
    {
      variant: "solid",
      action: "primary",
      class: "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0"
    },
    {
      variant: "solid",
      action: "secondary",
      class: "text-typography-800 data-[hover=true]:text-typography-800 data-[active=true]:text-typography-800"
    },
    {
      variant: "solid",
      action: "positive",
      class: "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0"
    },
    {
      variant: "solid",
      action: "negative",
      class: "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0"
    }
  ]
});
var buttonGroupStyle = nativewindUtils.tva({
  base: "",
  variants: {
    space: {
      "xs": "gap-1",
      "sm": "gap-2",
      "md": "gap-3",
      "lg": "gap-4",
      "xl": "gap-5",
      "2xl": "gap-6",
      "3xl": "gap-7",
      "4xl": "gap-8"
    },
    isAttached: {
      true: "gap-0"
    },
    flexDirection: {
      "row": "flex-row",
      "column": "flex-col",
      "row-reverse": "flex-row-reverse",
      "column-reverse": "flex-col-reverse"
    }
  }
});
var Button = React2__default.default.forwardRef(
  ({ className, variant = "solid", size = "md", action = "primary", ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      UIButton,
      {
        ref,
        ...props,
        className: buttonStyle({ variant, size, action, class: className }),
        context: { variant, size, action }
      }
    );
  }
);
var ButtonText = React2__default.default.forwardRef(({ className, variant, size, action, ...props }, ref) => {
  const {
    variant: parentVariant,
    size: parentSize,
    action: parentAction
  } = nativewindUtils.useStyleContext(SCOPE);
  return /* @__PURE__ */ jsxRuntime.jsx(
    UIButton.Text,
    {
      ref,
      ...props,
      className: buttonTextStyle({
        parentVariants: {
          variant: parentVariant,
          size: parentSize,
          action: parentAction
        },
        variant,
        size,
        action,
        class: className
      })
    }
  );
});
var ButtonSpinner = UIButton.Spinner;
var ButtonIcon = React2__default.default.forwardRef(({ className, size, ...props }, ref) => {
  const {
    variant: parentVariant,
    size: parentSize,
    action: parentAction
  } = nativewindUtils.useStyleContext(SCOPE);
  if (typeof size === "number") {
    return /* @__PURE__ */ jsxRuntime.jsx(
      UIButton.Icon,
      {
        ref,
        ...props,
        className: buttonIconStyle({ class: className }),
        size
      }
    );
  } else if ((props.height !== void 0 || props.width !== void 0) && size === void 0) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      UIButton.Icon,
      {
        ref,
        ...props,
        className: buttonIconStyle({ class: className })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    UIButton.Icon,
    {
      ...props,
      className: buttonIconStyle({
        parentVariants: {
          size: parentSize,
          variant: parentVariant,
          action: parentAction
        },
        size,
        class: className
      }),
      ref
    }
  );
});
var ButtonGroup = React2__default.default.forwardRef(
  ({
    className,
    space = "md",
    isAttached = false,
    flexDirection = "column",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      UIButton.Group,
      {
        className: buttonGroupStyle({
          class: className,
          space,
          isAttached,
          flexDirection
        }),
        ...props,
        ref
      }
    );
  }
);
Button.displayName = "Button";
ButtonText.displayName = "ButtonText";
ButtonSpinner.displayName = "ButtonSpinner";
ButtonIcon.displayName = "ButtonIcon";
ButtonGroup.displayName = "ButtonGroup";

exports.FGButton = Button;
exports.FGUIProvider = GluestackUIProvider;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map