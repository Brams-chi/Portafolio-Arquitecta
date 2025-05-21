import { cn } from "../lib/utils";

export function Card({ children, className }) {
  return (
    <div className={cn("rounded-2xl border border-neutral-200 bg-white shadow-sm", className)}>
      {children}
    </div>
  );
}

export default Card;