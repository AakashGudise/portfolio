import { ArrowUpShort } from 'react-bootstrap-icons'
import './footer.component.css'


export function FooterComponent() {
    return (
        <div>
            <main>
                {/* //   < !-- ======= Footer ======= --> */}
                <footer id="footer">
                    <div className="container">
                        <div className="copyright">
                            &copy; Copyright <strong><span>iPortfolio</span></strong>
                        </div>
                        <div className="credits">
                        
                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </div>
                </footer>
                {/* //   <!--End  Footer-- > */}

                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i><ArrowUpShort></ArrowUpShort></a>

                
            </main>
        </div>
    )
}