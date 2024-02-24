import React from "react";

function ContactItem({ children }) {
  return <div className="contact-item">{children}</div>;
}

function ContactItemBody({ name, tag }) {
  return (
    <div className="contact-item__body">
      <h3 className="contact-item__title">{name}</h3>
      <p className="contact-item__username">@{tag}</p>
    </div>
  );
}

function ContactItemImage({ imageUrl }) {
  return (
    <div className="contact-item__image">
      <img src={imageUrl} alt="contact avatar" />
    </div>
  );
}

ContactItem.ContactItemBody = ContactItemBody;
ContactItem.ContactItemImage = ContactItemImage;

export default ContactItem;
