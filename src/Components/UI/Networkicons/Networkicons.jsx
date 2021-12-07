import './Networkicons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faLinkedin, faInstagram, faGithub,} from '@fortawesome/free-brands-svg-icons';

export const Networkicons = () => {
    return(
        <>
            <div class="allicons">
            <div class="icons">
                <a
                class="btnIcons"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                ><FontAwesomeIcon icon={faFacebook}/></a>
                    <a
                    class="btnIcons"
                    href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                ><FontAwesomeIcon icon={faTwitter}/></a>
                    <a
                    class="btnIcons"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><FontAwesomeIcon icon={faGoogle}/></a>
                        <a
                        class="btnIcons"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><FontAwesomeIcon icon={faInstagram}/></a>
                            <a
                            class="btnIcons"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            ><FontAwesomeIcon icon={faLinkedin}/></a>
                                <a
                                class="btnIcons"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                                ><FontAwesomeIcon icon={faGithub}/></a>
                                </div>
                            </div>
        </>
    )
} 