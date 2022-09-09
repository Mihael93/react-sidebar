import './ToggleSwitch.css';

function ToggleSwitch(props, disabled) {

   return (
      <div className="toggle-switch">
         <input
            type="checkbox"
            name={props.name}
            className="toggle-switch-checkbox"
            id={props.id}
            checked={props.checked}
            onChange={e => props.onChange(e.target.checked)}
            disabled={props.disabled}
         />
         <label className="toggle-switch-label" htmlFor={props.id}>
            <span
               className={disabled ? "toggle-switch-inner" : "toggle-switch-disabled"}
               data-yes='Avaliable'
               data-no='Not Avaliable'
            />
            <span className={disabled ? "toggle-switch-switch toggle-switch-disabled" : "toggle-switch-switch"}
            />
         </label>

      </div>
   )
}

export default ToggleSwitch;