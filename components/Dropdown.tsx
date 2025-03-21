"use client";
import { useState } from "react";
import Image from "next/image";
import { DropdownItem } from "@/utils/types";

export default function Dropdown({ items }: { items: DropdownItem[] }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem>(items[0]);

  return (
    <div className="app-dropdown">
      <div className="app-dropdown__control app-h-pr-4" onClick={() => setIsOpen(!isOpen)}>
        <Image src={selectedItem.image} alt={`${selectedItem.value} icon`} width={20} height={20} />
        {selectedItem.label}
      </div>
      <div className={`app-dropdown__content ${isOpen ? "app-dropdown__content--open" : ""}`}>
        {items.map((item) => (
          <div
            key={item.value}
            className={`app-dropdown__item ${selectedItem.value === item.value ? "app-dropdown__item--selected" : ""}`}
            onClick={() => {
              setSelectedItem(item);
              setIsOpen(false);
            }}
          >
            <Image src={item.image} alt={`${item.value} icon`} width={20} height={20} />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
