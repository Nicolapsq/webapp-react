import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Loader from "../components/Loader"
import { useLoaderProvider } from "../context/LoaderContext";


export default function DefaultLayout() {
    const {isLoading} = useLoaderProvider();
    return (
        <>
        <Navbar></Navbar>
        <Loader isLoading={isLoading} />
        <main>
            <Outlet/>
        </main>
        </>
    )
}