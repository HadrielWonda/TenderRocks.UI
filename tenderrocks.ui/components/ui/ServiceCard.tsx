interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 transition-all hover:shadow-xl hover:border-tender-light dark:hover:border-tender-light">
    <div className="mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-tender-dark dark:text-tender-light mb-3">{title}</h3>
    <p className="text-gray-700 dark:text-gray-300">{description}</p>
  </div>
);

export default ServiceCard;