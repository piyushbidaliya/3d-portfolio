import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

//service_ddnac6o
//template_lrfmm2l
//f6RLRC3Sy6x578M86

const Contact = () => {
  const formRef = useRef()
  const [ form, setForm ] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({...form, [name]: value})
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send('service_ddnac6o', 'template_lrfmm2l',{
      from_name: form.name,
      to_name: 'Piyush',
      from_email: form.email,
      to_email: 'bidaliyapiyush@gmail.com',
      message: form.message,
    },
     'f6RLRC3Sy6x578M86'
    ).then(()=>{
      setLoading(false)
      alert('Thank you I will get back to you as soon as possible')

      setForm({
        name: '',
        email: '',
        message: '',
      })
    },(error)=>{
      setLoading(false)
      console.log(error)
      alert('Something went wrong.')
    })

  }
  return (
    <div className="xl:mt-12 flex flex-col-reverse lg:flex-row gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-1 bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form action=""
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            >
            </input>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            >
            </input>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium resize-none"
            >
            </textarea>
          </label>

            <button
              type="submit"
              className="bg-tertiary hover:bg-secondary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>


        </form>
      </motion.div>

      <motion.div
       variants={slideIn('right', 'tween', 0.2, 1)}
       className="flex-1 lg:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")