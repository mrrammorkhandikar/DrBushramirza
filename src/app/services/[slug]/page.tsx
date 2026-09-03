import { notFound } from 'next/navigation';
import { getServiceBySlug, services } from '@/data/services';
import ServiceDetailPage from '@/components/ServiceDetailPage';

export function generateStaticParams() {
    return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return { title: 'Service Not Found | Dr. Bushra\'s Dental Care' };
    }

    return {
        title: `${service.title} | Dr. Bushra's Dental Care`,
        description: service.description,
    };
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return <ServiceDetailPage service={service} />;
}
