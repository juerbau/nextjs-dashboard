import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
    return (
        <>
            <h1>Fetching data...</h1>
            <DashboardSkeleton/>
        </>
    );
}