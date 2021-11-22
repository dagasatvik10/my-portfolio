import { FunctionComponent } from 'react';

const Form: FunctionComponent = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-primary1 h-300 w-300 my-10 lg:h-500 lg:w-600 lg:my-20">
      <form
        action="mailto:dagasatvik10@gmail.com?subject=Connecting From My Website"
        method="post"
        encType="text/plain"
        className="flex flex-col justify-center items-center h-250 w-250 lg:h-400 lg:w-500 bg-white"
      >
        <div className="text-2xl lg:text-5xl font-title py-2">Connect With Me</div>
        <div className="flex flex-col lg:flex-row  justify-center py-2 w-4/5">
          <input className="border-b lg:mx-2 outline-none" type="text" name="name" placeholder="name" />
          <input className="border-b lg:mx-2 outline-none" type="email" name="email" placeholder="email" />
        </div>
        <div className="flex flex-row justify-center py-2 w-4/5">
          <textarea className="border-b w-full lg:mx-2 outline-none" name="message" placeholder="message"></textarea>
        </div>
        <div className="flex flex-row justify-center py-2">
          <button type="submit" className="bg-primary1 text-white rounded-full py-2 px-10 text-base lg:text-xl">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
