import { ListItem } from "./ListItem";

export function List({ data }) {
  if (!data.items) return <p>{data.message}</p>;
  return (
    <div className="flex flex-col w-1/6 gap-2">
      {data?.items?.map((v) => (
        <ListItem key={v.id} id={v.id}>
          {v.name}
        </ListItem>
      ))}
    </div>
  );
}
