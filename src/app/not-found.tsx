import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-300px)] items-center justify-center bg-blueprint-50 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-blueprint">404 - Page Not Found</h1>
        <p className="mb-8 text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist. Please check the URL and try again.
        </p>
        <div className="space-x-4">
          <Link
            href="/"
            className="inline-block rounded-full bg-gray-200 px-6 py-2 text-gray-800 transition-colors hover:bg-gray-300"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
