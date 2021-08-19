import instagramIcon from '../components/images/instagram-brands.svg'
console.log(instagramIcon)
export default function Contact({isOpen, projects, global}) {
    console.log('HERE', isOpen, global)
    const {content} = projects.find(e => e.title === 'Address')
    const instagram = global.socialNetworks.find(e => e.title === 'Instagram')
console.log(instagram, 'kkkk')
console.log(instagramIcon)
    return (
        <div className={`contactPage${isOpen ? ' open' : ''}`}>
            <h1>Contact</h1>
            <h4>{content[0].content}</h4>
            <h4>{content[1].content}</h4>
            <h4>{content[2].content}</h4>
            <h4>{content[3].content}</h4>
            <h4>Email - {global.contactEmail}</h4>
            <h4>Socials</h4>
           <a target="_blank" href={instagram.url} className='instagram-button'> <img className='instagram-icon' src={instagramIcon.src}></img></a>

        </div>
    );
}

