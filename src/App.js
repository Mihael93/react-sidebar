import './App.css';
import { useState } from 'react';
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch';
import Photo from './components/UserPhoto/Photo';
import Language from './components/Language/language';

function App() {
   //states declaration template
   const [image, setImage] = useState('https://www.svgrepo.com/show/106784/avatar.svg');
   const [nameState, setNameState] = useState('');
   const [positionState, setPositionState] = useState('');
   const [ageState, setAgeState] = useState('');
   const [residenceState, setResidenceState] = useState('');
   const [freelanceState, setFreelanceState] = useState(false);
   const [adressState, setAdressState] = useState('');
   const [language, setLanguage] = useState([]);

   const onNameChange = (event) => {
      setNameState(event.target.value);
   }
   const onPositionChange = (event) => {
      setPositionState(event.target.value);
   }
   const onAgeChange = (event) => {
      setAgeState(event.target.value);
   }
   const onResidanceChange = (event) => {
      setResidenceState(event.target.value);
   }
   const onFreelanceChange = (checked) => {
      setFreelanceState(checked);
   }
   const onAdressChange = (event) => {
      setAdressState(event.target.value);
   }

   //user states
   const [userPhoto, setUserPhoto] = useState('https://www.svgrepo.com/show/106784/avatar.svg');
   const [userName, setUserName] = useState('Empty field');
   const [userPosition, setUserPosition] = useState('Empty field');
   const [userAge, setUserAge] = useState('Empty field');
   const [userResidence, setUserResidence] = useState('Empty field');
   const [userFreelance, setUserFreelance] = useState('Empty field');
   const [userAdress, setUserAdress] = useState('Empty field');
   const [languageDisplay, setLanguageDisplay] = useState([{ value: 'Empty field', id: null }]);

   //Freelance status
   function updateStatus(status) {
      const succes = "Avaliable";
      const failure = "Not Avaliable";
      if (status === false) {
         return failure;
      } else {
         return succes;
      };
   };

   //info render
   function onSubmitButton() {
      return (
         setUserName(nameState),
         setUserPosition(positionState),
         setUserAge(ageState),
         setUserResidence(residenceState),
         setUserFreelance(updateStatus(freelanceState)),
         setUserAdress(adressState),
         setUserPhoto(image),
         setLanguageDisplay(language)
      )
   }

   return (
      <div className="container">
         <div className='row justify-content-around my-2'>
            {/* output sidebar */}
            <div className='col py-3 my-1 border border-secondary rounded'>
               <img src={userPhoto} alt='avatar'></img>
               <p className='text-center h6 my-2'>{userName}</p>
               <p className='text-center text-muted small'>{userPosition}</p>
               <div className='wrapper-bar'>
                  <hr className='my-3' ></hr>
                  <div className='d-flex justify-content-between align-items-center'>
                     <span className='bg-warning p-1 my-2 mr-2'>Age:</span>
                     <span>{userAge}</span>
                  </div>
                  <div className='d-flex justify-content-between align-items-center'>
                     <span className='bg-warning p-1 my-2 mr-2'>Residence:</span>
                     <span>{userResidence}</span>
                  </div>
                  <div className='d-flex justify-content-between align-items-center'>
                     <span className='bg-warning p-1 my-2 mr-2'>Freelance:</span>
                     <span>{userFreelance}</span>
                  </div>
                  <div className='d-flex justify-content-between align-items-center'>
                     <span className='bg-warning p-1 my-2 mr-2'>Address:</span>
                     <span>{userAdress}</span>
                  </div>
                  <hr className='my-3'></hr>
                  <div>
                     <span className='my-2 d-block h6'>Languages:</span>
                     <ul>
                        {languageDisplay.map(item => {
                           return (
                              <li key={item.id}>{item.display}{item.value}</li>
                           )
                        })}
                     </ul>
                  </div>
                  <hr className='my-3' ></hr>
               </div>
            </div>
            {/* custom arrow */}
            <img src='https://www.svgrepo.com/show/36208/left-arrow.svg'
               alt='flow-direction' className='mx-1 my-3 align-self-center' style={{ width: '50px' }} />
            {/* input sidebar */}
            <div className='col py-3 my-1 border border-secondary rounded'>
               <Photo image={image} setImage={setImage} />
               <form className='my-2'>
                  <div className='d-flex justify-content-between my-1'>
                     <span className='mr-2'>Name:</span>
                     <input type="text" maxLength='30' value={nameState} onChange={onNameChange} />
                  </div>
                  <div className='d-flex justify-content-between my-1'>
                     <span className='mr-2'>Position:</span>
                     <input type="text" maxLength='40' value={positionState} onChange={onPositionChange} />
                  </div>
                  <hr className='my-3' ></hr>
                  <div className='d-flex justify-content-between my-1'>
                     <span className='mr-2'>Age:</span>
                     <input type="number" maxLength='3' value={ageState} onChange={onAgeChange} />
                  </div>
                  <div className='d-flex justify-content-between my-1'>
                     <span className='mr-2'>Residence:</span>
                     <input type="text" maxLength='20' value={residenceState} onChange={onResidanceChange} />
                  </div>
                  <div className='d-flex justify-content-between align-items-center my-1'>
                     <span className='mr-2'>Freelance:</span>
                     <span htmlFor='status' className='align-items-center' >Avaliability</span>
                     <ToggleSwitch id='status' name='status' checked={freelanceState} onChange={onFreelanceChange} />
                  </div>
                  <div className='d-flex justify-content-between my-1'>
                     <span className='mr-2'>Address:</span>
                     <input type="text" maxLength='30' value={adressState} onChange={onAdressChange} />
                  </div>
                  <hr className='my-3' ></hr>
                  <Language language={language} setLanguage={setLanguage} />
                  <hr className='my-3' ></hr>
                  <button type="button" className="btn btn-primary btn-block mt-3"
                     onClick={onSubmitButton}>Submit</button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default App;
