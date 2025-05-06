import { NavLink, useNavigate, useRouteError } from "react-router-dom"

export const ErrorPage = ()=>{

    const error = useRouteError();

    const navigate = useNavigate();

    const handlePrevious = ()=>{
        navigate(-1);
    }

    if (error.status==404) {
    return(
        <section className="w-[100%] h-[100vh] flex flex-col items-center justify-center ">
         
            <figure>
                <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt="404 error image " />
            </figure>
        

            <div className=" text-[1.6rem] mt-[1.5rem] flex flex-col items-center">
                <p className="capitalize mb-[1rem]">the page you were looking for could not be found</p>
                <div>
                    <NavLink to='/'>
                    <button className=" capitalize bg-[red] p-[1rem] w-[15rem] mb-[1rem] cursor-pointer" >back to home</button>
                    </NavLink>
                    <button onClick={handlePrevious} className="capitalize bg-[red] p-[1rem] w-[20rem] ml-[1rem] cursor-pointer ">go back to previous</button>
                </div>
            </div>

        </section>
    )
}

return <h1>the page you are looking does not exist</h1>

}