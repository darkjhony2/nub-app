import { Route, Routes } from "react-router-dom"
import { EditCpu } from "./application/pages/EditCpu"
import Home from "./application/pages/Home"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/edit" element={<EditCpu/>} />
        </Routes>
    )
}