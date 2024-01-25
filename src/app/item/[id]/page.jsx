import { ItemModal } from "@/components/Modal";
import { getItem } from "@/app/helpers";

export default async function ItemPage({ params: { id } }) {
  const itemData = await getItem(id);

  return <ItemModal itemData={itemData} />;
}
