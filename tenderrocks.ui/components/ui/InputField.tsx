interface InputFieldProps {
  label: string;
  type: string;
}

const InputField = ({ label, type }: InputFieldProps) => (
  <div>
    <label className="block mb-1">{label}</label>
    <input 
      type={type} 
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tender-light"
    />
  </div>
);

export default InputField;