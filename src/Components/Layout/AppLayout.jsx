import { Outlet, useNavigation } from "react-router-dom"
import { Footer } from "../UI/Footer"
import { Header } from "../UI/Header"
import { Loader } from "../UI/Loader";

export const AppLayout = ()=>{

    const navigation = useNavigation();

    if (navigation.state=='loading') {
        return <Loader/>
    }

    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}