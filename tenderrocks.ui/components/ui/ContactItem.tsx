interface ContactItemProps {
  label: string;
  value: string;
}

const ContactItem = ({ label, value }: ContactItemProps) => (
  <div className="flex items-start">
    <span className="font-medium text-tender-dark w-20">{label}:</span>
    <span>{value}</span>
  </div>
);

export default ContactItem;