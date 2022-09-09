import './Photo.css'

function Photo(props) {

   const handleImage = async (event) => {
      if (event.target.files.length !== 0) {
         props.setImage(URL.createObjectURL(event.target.files[0]));
      } else {
         props.setImage('https://www.svgrepo.com/show/106784/avatar.svg');
      }
   };

   return (
      <div className='imgDownload'>
         <input type="file" accept="image/*" id='inputAvatar'
            onChange={handleImage} style={{ display: 'none' }} />
         <label htmlFor="inputAvatar" className='userPhoto' >
            <img src={props.image} alt="avatar" defaultValue={props.image} />
         </label>
      </div>
   )
}

export default Photo;