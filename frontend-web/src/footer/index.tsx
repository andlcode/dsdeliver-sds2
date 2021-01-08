import './styles.css';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as InstragramIcon } from './instagram.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://youtube.com/c/DevSuperior" target="_new">
                    <YoutubeIcon />
                </a>
                <a href="https://linkedin.com/school/DevSuperior/" target="_new">
                <LinkedinIcon />
                </a>
                <a href="https://instagram.com/devsuperior.ig/" target="_new">
                    <InstragramIcon />
                </a>

            </div>
        </footer>
    )
}

export default Footer;