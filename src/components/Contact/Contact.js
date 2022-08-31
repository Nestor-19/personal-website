import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
  const [state, handleSubmit] = useForm("xzbwzlrd");

  if (state.succeeded) {
    alert("Thanks 😊");
    state.succeeded = false;
  }

  return (
    <>
      <div name='Contact' className="w-full h-screen flex items-center justify-center sm:mt-[15%] p-4">
          <form onSubmit={handleSubmit} className="flex flex-col max-w-[1000px] w-full">
              <div className="pb-10 text-gray-300">
                  <span className="text-4xl pr-2 waving-hand">👋</span>
                  <p className="text-4xl font-bold inline hover:text-[#ffc857]">Contact Me</p>
              </div>

              <input
                id="name"
                type="text" 
                name="name"
                className='bg-[#ccd6f6] p-2 mb-5 rounded-md outline-none placeholder-black placeholder-opacity-100 text-black'
                placeholder="Name"
              />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
              /> 
              <input
                id="email"
                type="email" 
                name="email"
                className='bg-[#ccd6f6] p-2 mb-4 rounded-md outline-none placeholder-black placeholder-opacity-100 text-black'
                placeholder="Email"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
              <textarea
                id="message"
                name="message"
                className='my-4 bg-[#ccd6f6] p-2 rounded-md outline-none placeholder-black placeholder-opacity-100 text-black'
                rows='9'
                placeholder="Message"
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
              <button type="submit" disabled={state.submitting} className='text-black border-2 bg-[#ccd6f6]  hover:bg-[#ffc857] hover:text-black px-8 py-1 my-6 mx-auto rounded-md font-medium'>
                Say Hi!
              </button>
            </form>
      </div>
    </>
  )
}

export default Contact