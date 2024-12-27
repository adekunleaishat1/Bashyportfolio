import React, {useRef,useState} from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

const Sendmail = () => {
    const form = useRef()
  

   const [userdetail, setuserdetail] = useState({
      user_name:"",
      user_email:"",
      message:""
    })


   const sendEmail = (e) =>{
     e.preventDefault()
     const serviceId = 'service_e3cn0l3'
     const templateId = 'template_adthuzc'
     const publicKey = 'mB39RVaKAluujxDoi'

     const templateParams = {
      from_name:userdetail.user_name,
      from_email:userdetail.user_email,
      message :userdetail.message,
      to_name:"Basirat"
    }

    emailjs.send(serviceId, templateId,templateParams, publicKey)
      .then((res) => {
          console.log(res);
          setuserdetail({
            user_name:"",
            user_email:"",
            message:""
          })
          toast.success("Message sent successful,we will get back to you shortly")
        }).catch((error) => {
          console.log('FAILED...', error);
        });
   }
  return (
    <div>
        <form  onSubmit={sendEmail}  className="w-full  md:w-[50%] mx-auto mt-6" >
           <div className="grid grid-cols-2 gap-4 mb-6">
           <input value={userdetail.user_name} onChange={(e)=>setuserdetail({...userdetail, user_name:e.target.value})}  className="border-none bg-[#101010] rounded-lg py-4 px-4 outline-none text-white text-[16px] font-medium" type="text" placeholder="Name" />
           <input value={userdetail.user_email}  onChange={(e)=>setuserdetail({...userdetail, user_email:e.target.value})}  className="border-none bg-[#101010] rounded-lg py-4 px-4 outline-none  text-white text-[16px] font-medium" type="text" placeholder="Email" />
           </div>
            <textarea value={userdetail.message} onChange={(e)=>setuserdetail({...userdetail, message:e.target.value})}  className="border-none bg-[#101010] rounded-lg py-4 px-4 w-full outline-none  text-white text-[16px] font-medium"  id="" cols="30" rows="10" placeholder="Tell me more about your project"></textarea>
            <button type='submit' className="w-full py-3 px-6 rounded-md border-none text-[16px] font-medium text-white bg-gradient-to-l mt-4 from-[#c084fc] to-[#db2777]">Send</button>
            <ToastContainer/>
      </form> 
    </div>
  )
}

export default Sendmail