interface Props {
  filter: "all" | "active" | "completed";
  setFilter: React.Dispatch<
    React.SetStateAction<"all" | "active" | "completed">
  >;
  onClearCompleted: () => void;
}

const FilterButtons: React.FC<Props> = ({
  filter,
  setFilter,
  onClearCompleted,
}) => (
  <div className="filters">
    <div className="filter-btn">
      {["all", "active", "completed"].map((f) => (
        <button key={f} onClick={() => setFilter(f as any)}>
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
    <button onClick={onClearCompleted}>Clear Completed Todos</button>
  </div>
);

export default FilterButtons;
