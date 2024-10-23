import profile from './assets/1.jpg';

function ProfilePicture() {
    const handleClick = (e) => {
        e.target.style.display = 'none';
    }
    return <img onClick={(e) => handleClick(e)} src={profile} alt="profile" style={{width: '200px', height: '200px', borderRadius: '50%'}} />;
}

export default ProfilePicture;