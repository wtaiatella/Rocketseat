import React, { ImgHTMLAttributes } from "react";
import style from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({
  hasBorder = true,
  ...props
}: AvatarProps): React.ReactElement {
  return (
    <img
      className={hasBorder ? style.avatarWithBorder : style.avatar}
      alt="profile image"
      {...props}
    />
  );
}
