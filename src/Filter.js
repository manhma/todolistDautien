function Filter({ todos, handleFilter, handleDeleteCompleted, btnFilter }) {
  return (
    <div className="filter">
      <div className="bottomLeft">{todos.length} viec</div>
      <div className="bottomCenter">
        <div
          className="loc"
          style={{
            border: btnFilter === 1 ? "1px solid black" : "none",
            borderRadius: "3px",
          }}
          onClick={() => handleFilter(1)}
        >
          Tat ca
        </div>
        <div
          className="loc"
          style={{
            border: btnFilter === 2 ? "1px solid black" : "none",
            borderRadius: "3px",
          }}
          onClick={() => handleFilter(2)}
        >
          Chua lam
        </div>
        <div
          className="loc"
          style={{
            border: btnFilter === 3 ? "1px solid black" : "none",
            borderRadius: "3px",
          }}
          onClick={() => handleFilter(3)}
        >
          Da lam
        </div>
      </div>
      <div className="bottomRight">
        <div onClick={() => handleDeleteCompleted()}>Xoa viec da lam</div>
      </div>
    </div>
  );
}
export default Filter;
