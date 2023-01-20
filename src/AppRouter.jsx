import { Route, Routes } from "react-router-dom"
import Home from "./application/pages/Home"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    )
}