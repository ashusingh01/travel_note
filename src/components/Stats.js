export default function Stats({ items }) {
  const numItems = items.length;
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everyhting! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and you have already
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
