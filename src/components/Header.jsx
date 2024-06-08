// Context API
// import { useItemsContext } from "../lib/hooks";

import { useItemsStore } from "../stores/itemsStore";
import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  // Context API
  // const { items } = useItemsContext();

  // Zustand
  const items = useItemsStore((state) => state.items);

  return (
    <header>
      <Logo />
      <Counter
        nrOfItemsPacked={items.filter((item) => item.packed).length}
        totalNrOfItems={items.length}
      />
    </header>
  );
}
