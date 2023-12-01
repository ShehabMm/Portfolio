/* eslint-disable no-constant-condition */
import './Footer.css'
// eslint-disable-next-line react/prop-types
const Footer = ({appear}) => {
  return (
    <footer>
      <div className='Left-links'>

<ul>
  <li><a href="">About</a></li>
  <li><a href="">Projects</a></li>
  <li><a href="">Speaking</a></li>
  <li><a href="">Uses</a></li>
</ul>


      </div>

      <div className='right-side'>
        <p>2024 Dev Shehab. All rights reserved.</p>
<a href="#up">  
        <button className='icon-circle-up scroll2up' style={{opacity:appear?1:0, transition:'0.8s'}}>
        </button>
        </a>
      </div>


    </footer>
  );
}

export default Footer;
