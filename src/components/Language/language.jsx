import { useState } from 'react';
import './Language.css';

function Language(props) {

   const [newItem, setNewItem] = useState('');
   const [selectValue, setSelectValue] = useState('A1');

   function addItem() {
      if (!newItem) {
         window.alert('Enter language');
         return;
      }
      const item = {
         id: Math.floor(Math.random() * 1000),
         display: `${selectValue} - `,
         value: newItem
      }
      props.setLanguage(oldList => [...oldList, item]);
      setNewItem('');
   }

   function deleteItem(id) {
      const newArray = props.language.filter(item => item.id !== id);
      props.setLanguage(newArray);
   }

   return (
      <div className="language-wrapper">
         <h6>Languages:</h6>
         <div className='input-wrapper d-flex justify-content-between'>
            <select value={selectValue} className='select-lang'
               onChange={event => setSelectValue(event.target.value)}>
               <option>A1</option>
               <option>A2</option>
               <option>B1</option>
               <option>B2</option>
               <option>C1</option>
               <option>C2</option>
            </select>
            <input type='text' maxLength='20'
               className='input-lang'
               placeholder='Enter language name'
               value={newItem}
               onChange={event => setNewItem(event.target.value)}
            />
            <button type='button' onClick={addItem}
               className='btn btn-success btn-sm'>
               Add
            </button>
         </div>
         <ul className='lang-list'>
            {props.language.map(item => {
               return (
                  <li key={item.id}>{item.display}{item.value}
                     <button onClick={() => deleteItem(item.id)} className="lang-cross-btn">
                        <span className='lang-cross'>&#10007;</span>
                     </button>
                  </li>
               )
            })}
         </ul>
      </div >
   );
}

export default Language;