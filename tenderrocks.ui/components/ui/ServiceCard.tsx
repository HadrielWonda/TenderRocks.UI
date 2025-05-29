interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard = ({ title, description }: ServiceCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-tender-dark">
    <h3 className="text-xl font-semibold text-tender-dark mb-3">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default ServiceCard;