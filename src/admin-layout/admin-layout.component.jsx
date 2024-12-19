import './admin_layout.component.css'

import { AboutComponent } from "../components/aboutcomponent/about.component";
import { ContactComponent } from "../components/contactcomponent/contact.component";
import { FactsComponent } from "../components/factscomponent/fact.component";
import { HomeComponent } from "../components/homecomponent/home.component";
import { PortfolioComponent } from "../components/portfoliocomponent/portfolio.component";
import { ResumeComponent } from "../components/resumecomponent/resume.component";
import { ServicesCompnent } from "../components/servicescomponent/services.component";
import { SkillsComponent } from "../components/skillscomponent/skills.component";
import { FooterComponent } from "../festurecomponent/footercomponent/footer.component";
import { MenuComponent } from "../festurecomponent/menucomponent/menu.component";



export function AdminLayout() {
    return (
        <div>
            <div>
                <div className="admin_1">
                    <MenuComponent></MenuComponent>
                </div>
                <div className="admin_2">
                    <HomeComponent></HomeComponent>
                    <AboutComponent></AboutComponent>
                    <FactsComponent></FactsComponent>
                    <SkillsComponent></SkillsComponent>
                    <ResumeComponent></ResumeComponent>
                    <PortfolioComponent></PortfolioComponent>
                    <ServicesCompnent></ServicesCompnent>
                    <ContactComponent></ContactComponent>
                    <FooterComponent></FooterComponent>

                </div>
            </div>
        </div>
    )
}