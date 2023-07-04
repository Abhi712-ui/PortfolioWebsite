import Resume from './Abhimanyu_Resume.pdf'

import React from 'react'

export const ResumeDownload = () => {

    const handleDownload = () => {
        window.open(Resume, '_blank');
    }

    return (
        <div>ResumeDownload</div>
    )
}
