interface ContactItemProps {
  label: string;
  value: string;
}

const ContactItem = ({ label, value }: ContactItemProps) => (
  <div className="flex items-start">
    <span className="font-medium text-tender-dark dark:text-tender-light w-24">{label}:</span>
    <span className="text-gray-700 dark:text-gray-300">{value}</span>
  </div>
);

export default ContactItem;