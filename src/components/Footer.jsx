import { ArrowUp } from "lucide-react";
import { AiTwotoneHeart } from "react-icons/ai";
import { ThemeToggle } from "./ThemeToggle";

export const Footer = () => {
  return (
    <footer className="py-4 px-4 bg-card relative border-t border-border mt-1 pt-2 flex flex-wrap justify-between items-center">
      {" "}
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-glow p-2 transition-colors"
      >
        <ArrowUp size={20} />
      </a>
      <p className="  font-bold text-sm text-muted-foreground ">
        {" "}
       <span className="flex items-center gap-1" >
    Created with <AiTwotoneHeart /> by me . </span>
      </p>
    </footer>
  );
};