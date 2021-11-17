import robThomas from '../../../assets/team/rob-thomas.jpg'
import jenJillians from '../../../assets/team/jen-jillians.jpg'
import tommyTikes from '../../../assets/team/tommy-tikes.jpg'

import './about.css'

const About = () => {
    return(
        <section className="about">
            <div>
                <h2>About Us</h2>
                <p>
                    We started Proof to commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
                <p>
                    Then we decided that it was varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
            </div>
            <div>
                <h2>The Team</h2>
                <div>
                    <div>
                        <img src={robThomas} alt="" />
                        <p>Rob Thomas</p>
                        <div>
                            <span><a href=""></a></span>
                            <span><a href=""></a></span>
                            <span><a href=""></a></span>
                        </div>
                    </div>
                    <div>
                        <img src={jenJillians} alt="" />
                        <p>Jen Jillians</p>
                        <div>
                            <span><a href=""></a></span>
                            <span><a href=""></a></span>
                            <span><a href=""></a></span>
                        </div>
                    </div>
                    <div>
                        <img src={tommyTikes} alt="" />
                        <p>Tommy Tikes</p>
                        <div>
                            <span><a href=""></a></span>
                            <span><a href=""></a></span>
                            <span><a href=""></a></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About