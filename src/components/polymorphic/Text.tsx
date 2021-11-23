import React from "react";
type TextProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
  onclick?: (event: React.MouseEvent<Element, MouseEvent>) => void;
};

type TextEditProps<E extends React.ElementType> = TextProps<E> &
  Omit<React.ComponentProps<E>, keyof TextProps<E>>;
//to avoid duplicates of the Textprops using Omit
function Text<E extends React.ElementType>({
  size,
  color,
  children,
  as,
  onclick,
}: TextEditProps<E>) {
  const Component = as || "div";
  if (onclick) {
    return (
      <Component
        className={`class-with-${size}-${color}`}
        onClick={(e) => onclick(e)}
      >
        {children}
      </Component>
    );
  } else {
    return (
      <Component className={`class-with-${size}-${color}`}>
        {children}
      </Component>
    );
  }
}

export default Text;
