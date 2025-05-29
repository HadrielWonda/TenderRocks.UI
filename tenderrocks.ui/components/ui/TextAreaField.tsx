interface TextAreaFieldProps {
  label: string;
}

const TextAreaField = ({ label }: TextAreaFieldProps) => (
  <div>
    <label className="block mb-1">{label}</label>
    <textarea 
      rows={4} 
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tender-light"
    ></textarea>
  </div>
);

export default TextAreaField;