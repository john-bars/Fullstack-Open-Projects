import "../index.css";

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  } else {
    return (
      <div>
        {message.success && <div className="success">{message.success}</div>}
        {message.error && <div className="error">{message.error}</div>}
      </div>
    );
  }
};

export default Notification;
