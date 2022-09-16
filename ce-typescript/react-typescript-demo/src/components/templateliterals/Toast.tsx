// postion prop can be one of
// "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
// "center-bottom" | "right-center" | "right-top" | "right-bottom"

type HorizontalPostion = "left" | "center" | "right";
type VerticalPostion = "top" | "center" | "bottom";

// Template Literals
type ToastProp = {
  position:
    | Exclude<`${HorizontalPostion}-${VerticalPostion}`, "center-center">
    | "center";
};

// but showing position center-center so use Exclude
// allow center only use Union

export const Toast = ({ position }: ToastProp) => {
  return <div>Toast Notification Position - {position}</div>;
};
