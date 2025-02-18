import React from 'react'

const GoogleMap = () => {
    return (
        <div className="lg:pt-15 lg;pb-15 pb-10 pt-10 overflow-x-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753825.9328519846!2d72.62500701250003!3d23.24870359999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69822b868e9b%3A0xece29acad848f29c!2sOriental%20institute%20of%20science%20and%20technology%20oriental%20campus%20bhopal!5e0!3m2!1sen!2sbd!4v1739884909425!5m2!1sen!2sbd"
                width="1920" height="497" style={{border: 0}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default GoogleMap