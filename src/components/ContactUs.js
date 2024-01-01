const ContactUs=()=>{
    return(
        <div>
            <h1 className="font-semibold text-3xl p-4 m-4">Contact us Page</h1>
            <h4>Welcome this is our contact page</h4>
            <h4>If you have any queries please contact here : 9876543210 </h4>
            <form >
                <input type="text" className="border border-black p-2 m-2" placeholder="name" />
                <input type="text" className="border border-black p-2 m-2" placeholder="message" />
                <button className="border border-black p-2 m-2 bg-slate-400">  Submit</button>
            </form>
        </div>
    )
}
export default ContactUs;