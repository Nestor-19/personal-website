import './Contact.css'

const Contact = () => {
  return (
    <div name='Contact' className="w-full h-screen flex items-center justify-center sm:mt-[15%] p-4">
        <form action='' className="flex flex-col max-w-[1000px] w-full">
            <div className="pb-8 text-gray-300">
                <span className="text-4xl pr-2 waving-hand">👋</span>
                <p className="text-4xl font-bold inline hover:text-[#ffc857]">Contact Me</p>
                <p className="pt-5 text-2xl">Say Hi!</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 rounded-md outline-none placeholder-black placeholder-opacity-75' type='text' placeholder="Name" name='name'></input>
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-md outline-none placeholder-black placeholder-opacity-75' type='email' placeholder="Email" name='email'></input>
            <textarea className='my-4 bg-[#ccd6f6] p-2 rounded-md outline-none placeholder-black placeholder-opacity-75' name='message' rows='10' placeholder="Message me!"></textarea>
        </form>
    </div>
  )
}

export default Contact