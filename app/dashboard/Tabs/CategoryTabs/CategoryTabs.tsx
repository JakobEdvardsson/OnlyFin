type Props = {
    activeCategoryTab: number,
    handleCategoryTabClick(index: number, categoryId: number): void,
    userCategoryArray: OnlyfinUserCategoryTab[] | undefined,
    handleCategoryEditButtonClick(): void
}

export default function StockTabs(props: Props) {

    function renderCategoryTabs() {
        return(
            props.userCategoryArray?.map((category:OnlyfinUserCategoryTab, index : number) => (
                //TODO: {key = index} = no no no
                <li key={index} className="mr-2">
                    <button
                        className={`${props.activeCategoryTab === index ? 
                            "inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active"
                            :
                            "inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800 dark:hover:text-white "}`}

                        onClick={() => props.handleCategoryTabClick(index, category.userCategoryId)}
                        aria-current="page">{category.categoryName}
                    </button>
                </li>
            ))
        )
    }

    function renderLoadingTabs() {
        return(
            <li className="mr-2">
                <div className="inline-flex space-x-2">
                    <button className="px-4 py-3 text-white bg-gray-600 rounded-lg active animate-pulse" aria-current="page">...</button>
                    <button className="px-4 py-3 text-white bg-gray-600 rounded-lg active animate-pulse" aria-current="page">...</button>
                    <button className="px-4 py-3 text-white bg-gray-600 rounded-lg active animate-pulse" aria-current="page">...</button>
                </div>
            </li>
        )
    }

    return (

                // **************//
                // CATEGORY TABS //
                // **************//

            <ul
                className="flex
                items-center
                whitespace-nowrap
                text-sm
                font-medium
                text-center
                text-gray-500
                dark:text-gray-400
                max-w-auto
                overflow-x-auto
                scrollbar-none">

                {props.userCategoryArray ? renderCategoryTabs() : renderLoadingTabs()}

                {
                    // ***********************//
                    // EDIT CATEGORIES BUTTON //
                    // ***********************//
                }

                <li className="mr-2">
                    <button
                        id="dropdownMenuIconHorizontalButton"
                        data-dropdown-toggle="dropdownDotsHorizontal"
                        type="button"
                        onClick={props.handleCategoryEditButtonClick}
                        className="inline-flex
                            items-center
                            p-2
                            text-sm
                            font-medium
                            text-center
                            text-gray-900
                            bg-white
                            rounded-lg
                            hover:bg-gray-100
                            focus:outline-none
                            dark:text-white
                            dark:bg-gray-800
                            dark:hover:bg-gray-700
                            dark:focus:ring-gray-600
                            transition duration-300 ease-in-out hover:scale-110
                    "
                    >

                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        </svg>

                    </button>
                </li>
            </ul>


    )
}