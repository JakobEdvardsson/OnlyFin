"use client"
import RemoveThisClassLater from "@/app/studio/toolbar/toolbarTable/RemoveThisClassLater";
import ToolbarTable from "@/app/studio/toolbar/toolbarTable/ToolbarTable";

export default function Toolbar() {
    return(
        <div>

            {
                // ***************//
                // CHART SELECTOR //
                // ***************//
            }

            <label htmlFor="charts" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                an option</label>

            <select id="charts"
                    className="
                    bg-gray-50
                    border
                    border-gray-300
                    text-gray-900
                    text-sm rounded-lg
                    focus:ring-blue-500
                    focus:border-blue-500
                    block
                    w-full
                    p-2.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    ark:focus:ring-blue-500
                    dark:focus:border-blue-500">

                <option selected>Choose a chart</option>
                <option value="BAR">Bar</option>
                <option value="COL">Column</option>
                <option value="PIE">Pie</option>
                <option value="LINE">Line</option>
            </select>

            <ToolbarTable/>
        </div>
    )
}