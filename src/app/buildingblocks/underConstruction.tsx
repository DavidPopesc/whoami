export default function underConstruction(pageName: string) {
    return (
        <div className="max-w-2xl mx-auto mt-16 p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg text-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">{pageName}</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                This page is under construction, but nevertheless, welcome!
            </p>
            <p className="text-sm text-gray-400">Check back soon for updates.</p>
        </div>
    );
}