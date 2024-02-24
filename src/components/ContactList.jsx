import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id}>
          <ContactItem.ContactItemImage imageUrl={contact.imageUrl} />
          <ContactItem.ContactItemBody name={contact.name} tag={contact.tag} />
        </ContactItem>
      ))}
    </div>
  );
}

export default ContactList;
