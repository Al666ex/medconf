import './header.css'
const Header = () => 
<header className="container header">
    <div className="row">
        <div className="col">
            <img src="http://localhost:3000/files/GCE-logo.png" alt="logo" />
        </div>
        <div className="col gce_link">
            <a href="https://www.gcehealthcare.com/" target="_blank">GCE Healthcare</a>
        </div>
    </div>

</header>

export default Header