import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types"
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "../../assets/ContactUsPageGraphic.png";
import HText from "../../shared/HText";
type Props = {
    setSelectedPage:(value:SelectedPage) =>void;
}
const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

const ContactUs = ({setSelectedPage}: Props) => {
    const {trigger,register,formState:{errors}} = useForm();
const onSubmit =async(e:any) =>{
const isValid = await trigger();
if(!isValid){
    e.preventDefault();
}
}
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-10">
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}>
        {/**HEADER */}
        <motion.div className="md:w-3/5 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}>
            <HText><span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE</HText>
            <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo odio illum quo, laudantium magnam ratione, quasi hic, veritatis dicta beatae iste vel id sapiente et? 
            </p>
        </motion.div>
        {/**FORM AND IMAGE */}
        <div className="mt-10 justify-betwen gap-8 md:flex">
            <motion.div className="mt-10 basis-3/5 md:mt-0"initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}>
                <form target="_blank" onSubmit={onSubmit} method="POST" action = "https://formsubmit.co/vanoxuti@mailgolem.com">
                
                <input type="text" className={inputStyles} placeholder="NAME" {...register("name",{
                    required:true,
                    maxLength:100,

                })} />
                {errors.name && (
                    <p className="mt-1 text-primary-500 ">
                        {errors.name.type === "required" && "This field is required"}
                        {errors.name.type === "maxLength" && "maxLength is 100 character"}

                    </p>
                )}

<input type="email" className={inputStyles} placeholder="EMAIL" {...register("email",{
                    required:true,
                    maxLength:100,
                    pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

                })} />
                {errors.email && (
                    <p className="mt-1 text-primary-500 ">
                        {errors.email.type === "required" && "This field is required"}
                        {errors.email.type === "maxLength" && "maxLength is 100 character"}
                        {errors.email.type === "pattern" && "Invalid Email address"}

                    </p>
                )}

<textarea className={inputStyles} rows={4} cols={5} placeholder="MESSAGE" {...register("message",{
                    required:true,
                    maxLength:2000,

                })} />
                {errors.message && (
                    <p className="mt-1 text-primary-500 ">
                        {errors.message.type === "required" && "This field is required"}
                        {errors.message.type === "maxLength" && "maxLength is 2000 character"}

                    </p>
                )}

                <button type="submit" className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">Submit</button>
                </form>
            </motion.div>
            <motion.div className="relative mt-16 basis-2/5 md:mt-0  "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            >
                <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] ">
                    <img src={ContactUsPageGraphic} alt="contactUspageGraphic" className="w-full" />
                </div>
            </motion.div>
        </div>
        </motion.div>
    </section>
  )
}

export default ContactUs