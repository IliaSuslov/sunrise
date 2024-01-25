import Link from "next/link";

export function ListItem({ children, id }) {
  return (
    <Link
      href={`/item/${id}`}
      className="flex justify-center p-2 rounded-lg bg-slate-500"
    >
      {children}
    </Link>
  );
}
