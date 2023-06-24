"use client"

export default function Tabs() {
    return (
    <div>

        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="mr-2">
                <a href="#" className="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active"
                   aria-current="page">Tab 1</a>
            </li>
            <li className="mr-2">
                <a href="#"
                   className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Tab
                    2</a>
            </li>
            <li className="mr-2">
                <a href="#"
                   className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Tab
                    3</a>
            </li>
            <li className="mr-2">
                <a href="#"
                   className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Tab
                    4</a>
            </li>
            <li>
                <a className="inline-block px-4 py-3 text-gray-400 cursor-not-allowed dark:text-gray-500">Tab 5</a>
            </li>
        </ul>

    </div>

)
}