import { getList } from "@/app/helpers";

import { List } from "@/components/List";
import { RoutingButtons } from "@/components/RoutingButtons";

export default async function ListPage({ params: { id } }) {
  let data = await getList(id);
  return (
    <main className="flex flex-col gap-2 p-4">
      <List data={data} />
      <RoutingButtons page={id} />
    </main>
  );
}
