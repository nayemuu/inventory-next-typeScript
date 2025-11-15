import Image from "next/image";
import type { ComponentPropsWithoutRef, FC } from "react";

type InputWithLogoProps = {
  logo: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;

const InputWithLogo: FC<InputWithLogoProps> = ({ logo, label, ...props }) => {
  return (
    <div className="h-[55px] relative">
      <div className="absolute top-0 h-full flex items-center px-[13px]">
        <Image src={logo} alt={label} className=" h-[30px] w-[30px]" />
      </div>

      <input
        {...props}
        className="bg-transparent h-full w-full border border-solid border-primary focus:border-primary-deep rounded-[5px] outline-none pl-[53px] text-[16px]"
      />
    </div>
  );
};

export default InputWithLogo;
