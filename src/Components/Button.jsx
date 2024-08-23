const Button = ({ onClickHandler, value, title }) => {
    return (
      <button className='border  px-4 py-1 text-sm rounded-md font-medium hover:bg-black uppercase hover:text-white' onClick={onClickHandler} value={value} >
        {title}
      </button>
    );
  };
  
  export default Button;