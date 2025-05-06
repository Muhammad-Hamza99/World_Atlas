import { Form, useNavigation } from "react-router-dom"

export const contactData = async ({request})=>{
    try {
        const res = await request.formData();
        console.log(Object.fromEntries(res));
        
        return null
        
    } catch (error) {
        console.log(error);
        
    }

}

export const Contact = ()=>{

    const navigation = useNavigation();
    const isSubmitting = navigation.state=='submitting'

    return(
        <section className="section-contact">
        
            <div className="container flex flex-col justify-center items-center"  >
                <h1 className="text-[3rem] capitalize mb-[3rem]">contact us</h1>
                <Form method="post" action="/contact">
                    <div className="mb-[2rem]">
                    <label htmlFor="name">name:</label>
                    <input className="block " type="text" name="Username" id="name" autoComplete="off" placeholder="enter your name" required/>
                    </div>

                    <div className="mb-[2rem]">
                    <label htmlFor="email">email</label>
                    <input className="block" type="email" name="email" id="email" autoComplete="off" placeholder="enter your email" required />
                    </div>

                    <div className="flex flex-col mb-[2rem]">
                    <label htmlFor="message">message</label>
                    <textarea name="message" id="message" rows="10" cols='10' placeholder="enter a message" required ></textarea>
                    </div>

                    <div>
                    <button className="btn" type="submit">{isSubmitting?'sending...':'send'}</button>
                    </div>


                </Form>
            </div>

        </section>
    )
}