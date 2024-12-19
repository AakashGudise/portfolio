import { Route, Routes } from "react-router";
import { ResumeComponent } from "./components/resumecomponent/resume.component";



export function AppRouterComponent(){
    return(
        <div>
            <Routes>
                <Route path="/admin" element={<ResumeComponent></ResumeComponent>}></Route>
            </Routes>
        </div>
    )
}