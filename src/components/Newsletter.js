import { useState, useEffect } from "react";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  const clearFields = () => {
    setEmail('');
  }
}
