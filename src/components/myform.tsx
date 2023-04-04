import React, { FormEvent } from 'react';

const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
  
  event.preventDefault();
  //saco el input
  const input = document.getElementById('link-input') as HTMLInputElement;
  //saca el value
  const url = input.value;
  //saca el msg de error
  const errMsg = document.getElementById('err-msg') as HTMLDivElement;

  if (!isValidUrl(url)) {
    //if not valid display error and border red
    errMsg.textContent = 'Error: Please enter a valid URL';
    input.classList.add("border-red")
  } else {
    // Submit the form
    input.classList.remove("border-red")
    alert("Success")
    event.currentTarget.submit();
  }
};

const MyForm = () => {
  return (
    <form
      onSubmit={handleSubmit}
      id="link-form"
      className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
    >
      <input
        type="text"
        className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
        placeholder="Shorten a link here"
        id="link-input"
      />

      <button className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">
        Shorten It!
      </button>

      {/* error message */}
      <div id="err-msg" className="absolute left-7 bottom-3 text-red text-sm italic"></div>
    </form>
  );
};

export default MyForm;
