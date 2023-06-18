export type Mixins = {
  flexBox: FlexBox;
  preventDraggable: () => string;
};

type FlexBox = (
  direction?: "row" | "column" | "row-reverse" | "column-reverse",
  align?: "center" | "stretch" | "flex-start" | "flex-end" | "space-between" | "space-around",
  justify?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around"
) => string;

export const mixins = {
  flexBox: (direction = "row", align = "center", justify = "center") => `
      display: flex;
      flex-direction: ${direction};
      align-items: ${align};
      justify-content: ${justify};
      `,
  preventDraggable: () => `
      user-select: none;
      -moz-user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      `,
};
