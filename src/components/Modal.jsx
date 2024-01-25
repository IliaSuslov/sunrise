"use client";

import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function ItemModal({ itemData }) {
  const [isOpen, onOpenChange] = useState(true);
  const router = useRouter();

  function handleModalChange() {
    onOpenChange(false);
    router.push("/list/1");
  }
  return (
    <Modal isOpen={isOpen} onOpenChange={handleModalChange}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          {itemData.name}
        </ModalHeader>
        <ModalBody>{itemData.text}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
