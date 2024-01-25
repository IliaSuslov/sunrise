"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export function RoutingButtons({ page }) {
  const router = useRouter();

  return (
    <div className="flex gap-2">
      <Button
        onClick={() => router.push(`/list/${Number(page) - 1}`)}
        color="danger"
      >
        Назад
      </Button>
      <Button
        onClick={() => router.push(`/list/${Number(page) + 1}`)}
        color="primary"
      >
        Вперед
      </Button>
    </div>
  );
}
