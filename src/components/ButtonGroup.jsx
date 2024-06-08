// Context API
// import { useItemsContext } from "../lib/hooks";

// Zustand
import { useItemsStore } from "../stores/itemsStore";

// Components
import Button from "./Button";

export default function ButtonGroup() {
  // Context API
  // const {
  //   handleMarkAllAsComplete,
  //   handleMarkAllAsIncomplete,
  //   handleResetToInitial,
  //   handleRemoveAllItems,
  // } = useItemsContext();

  // Zustand
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  const secondaryButtons = [
    {
      text: "Cocher tout comme terminé",
      onClick: markAllAsComplete,
    },
    {
      text: "Cocher tout comme incomplet",
      onClick: markAllAsIncomplete,
    },
    {
      text: "Réinitialiser à l'initiale",
      onClick: resetToInitial,
    },
    {
      text: "Supprimer tout",
      onClick: removeAllItems,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }) => {
        return (
          <Button buttonType="secondary" onClick={onClick} key={text}>
            {text}
          </Button>
        );
      })}
    </section>
  );
}
