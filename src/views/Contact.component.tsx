import React from 'react';

interface Contact {
  type: string;
  display: string;
  src: string;
}

const contactInfo = [
  {
    type: 'email',
    display: 'reeannvirginia@gmail.com',
    src: 'https://img.icons8.com/ios/50/000000/important-mail.png',
  },
  {
    type: 'phone',
    display: '(904) 217-2821',
    src: 'https://img.icons8.com/ios/50/000000/phone.png',
  },
];

const Work = () => {
  return (
    <div className="contactContainer">
      <div className="contactDetails">
        <p>I&apos;m always available to discuss new projects and meet new people.</p>
        <p>I am also open to donating my time to charitable projects!</p>
        {contactInfo.map(({ type, display, src }: Contact) => (
          <div key={type} className="contactOption">
            <img src={src} alt="type" />
            <span>{display}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
