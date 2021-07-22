import "./SwitchButton.css";

export const SwitchButton = (props) => (
  <div
    class={`switch-button-container ${props.color} ${
      props.checked ? "active" : ""
    }`}
  >
    <input type="checkbox" id={props.id} onClick={props.onClick} />
    <label htmlFor={props.id}>{props.label.toUpperCase()}</label>
  </div>
);
