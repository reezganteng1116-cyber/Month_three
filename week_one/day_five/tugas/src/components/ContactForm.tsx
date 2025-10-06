import React, { useState } from "react";

interface Contact {
  firstName: string;
  lastName: string;
  email: string;
}

const ContactForm: React.FC = () => {
  const [contact, setContact] = useState<Contact>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
      <form className="flex flex-col gap-2">
        <input
          name="firstName"
          placeholder="Nama Depan"
          value={contact.firstName}
          onChange={handleChange}
          className="p-2 rounded-lg text-white bg-gray-700"
        />
        <input
          name="lastName"
          placeholder="Nama Belakang"
          value={contact.lastName}
          onChange={handleChange}
          className="p-2 rounded-lg text-white bg-gray-700"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
          className="p-2 rounded-lg text-white bg-gray-700"
        />
      </form>

      <div className="mt-4 bg-gray-700 p-3 rounded-lg">
        <h4 className="font-semibold mb-1">Preview Data:</h4>
        <p>Nama: {contact.firstName} {contact.lastName}</p>
        <p>Email: {contact.email}</p>
      </div>
    </div>
  );
};

export default ContactForm;
