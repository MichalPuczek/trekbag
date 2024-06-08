export default function Counter({ nrOfItemsPacked, totalNrOfItems }) {
  return (
    <p>
      <b>{nrOfItemsPacked}</b> / {totalNrOfItems}{" "}
      {nrOfItemsPacked > 1 ? "articles emballés" : "article emballé"}
    </p>
  );
}
