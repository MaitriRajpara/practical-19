import type { LoaderProps } from "../../Types/type";
import "./Loader.css";

const Loader: React.FC<LoaderProps> = ({ loading, error, empty }) => {
  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div className="todo-message todo-error">{error}</div>;
  }

  if (empty) {
    return <div className="todo-message todo-empty">No todos found.</div>;
  }

  return null;
};

export default Loader;
