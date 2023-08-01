"use client"

import {useEffect, useState} from "react";
import SearchDropDownMenu from "@/app/explore/components/SearchDropDownMenu";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import SearchResult from "@/app/explore/components/SearchResult";
import {Layout, Responsive, WidthProvider} from "react-grid-layout";
import GridLayout from "@/app/temptest/GridLayout";

//TODO: Fix cursed CSS & code, add support for stock search type
export default function Explore() {

    const ResponsiveGridLayout = WidthProvider(Responsive);

    const layouts: {lg: Layout[]} = {
        lg: [
            {i: '1', x: 0, y: 0, w: 1, h: 2},
            {i: '2', x: 1, y: 0, w: 3, h: 2},
            {i: '3', x: 4, y: 0, w: 1, h: 2},
        ],
    };

    const [dropdownButtonIsClicked, setDropdownButtonIsClicked] = useState(false);
    const [dropdownChoice, setDropdownChoice] = useState("Users");
    //const menuItems: string[] = ["Users", "Stocks"]

    const [nothingFound, setNothingFound] = useState<boolean>(false)
    const [usernameSearchQuery, setUsernameSearchQuery] = useState<string>()
    const [stockSearchQuery, setStockSearchQuery] = useState<string>()
    const [searchResult, setSearchResult] = useState<OnlyfinProfileSubInfo[]>();

    const [stockDropdownSearchSuggestions, setStockDropdownSearchSuggestions] = useState<OnlyfinStock[] | undefined>();

    useEffect(() => {
        if (usernameSearchQuery) {
            fetchUsersByUsername()
        }
        else {
            fetchRandomUsers()
        }
    }, [usernameSearchQuery])



    function fetchRandomUsers() {
        ApiCalls.fetchNewestUsers()
            .then((response) => {
                const profiles: OnlyfinProfileSubInfo[] = response.data

                setNothingFound(response.status === 204)

                setSearchResult(profiles)
            })
            .catch(error => {
                console.log("[explore/temp.tsx] error fetching data: " + error)
            })
    }

    function fetchUsersByUsername() {
        if (usernameSearchQuery) {
            ApiCalls.searchByUsername(usernameSearchQuery)
                .then(response => {
                    const profiles: OnlyfinProfileSubInfo[] = response.data

                    setNothingFound(response.status === 204)

                    setSearchResult(profiles)
                })
                .catch(error => {
                    console.log("[explore/page]: " + error)
                })
        }
    }

    function fetchStockBySearchInput() {
        if(stockSearchQuery) {
            ApiCalls.findStocksByName(stockSearchQuery)
                .then((response) => {
                    setStockDropdownSearchSuggestions(response.data)
                    console.log("Stock dropdown search suggestions: ", response.data)
                })
        }
    }

    function handleDropdownClick() {
        setDropdownButtonIsClicked(oldValue => !oldValue);
    }

    function handleSearchInput(searchQuery: string) {
        if(dropdownChoice === "Users") {
            setUsernameSearchQuery(searchQuery)
        } else if (dropdownChoice === "Stocks") {
            setStockSearchQuery(searchQuery)
            fetchStockBySearchInput()
        }

    }

    function renderSearchResult() {
        return (
            <SearchResult
                searchResult={searchResult}
            />
        )
    }

    function renderNoResultFound() {
        return <p className={"text-center"}>No results found...</p>
    }

    function handleUserClick() {
        setDropdownChoice("Users")
        setDropdownButtonIsClicked(false)
    }

    function handleStockClick() {
        setDropdownChoice("Stocks")
        setDropdownButtonIsClicked(false)
    }

    function handleStockSuggestionClick(stockIdChoice: number) {
        console.log("Will do search based on stock id: ", stockIdChoice)

        ApiCalls.findAnalystsThatCoverStock(stockIdChoice)
            .then((response) => {
                setSearchResult(response.data)
                console.log("setSearchResult: ", response.data)
            })
    }

    return (
        <>
            <div>
                <SearchDropDownMenu
                    //menuItems={menuItems}
                    dropdownButtonIsClicked={dropdownButtonIsClicked}
                    handleDropdownClick={handleDropdownClick}
                    handleSearchInput={handleSearchInput}
                    handleUserClick={handleUserClick}
                    handleStockClick={handleStockClick}
                    dropdownChoice={dropdownChoice}
                    stockDropdownSearchSuggestions={stockDropdownSearchSuggestions}
                    handleStockSuggestionClick={handleStockSuggestionClick}
                />
                {nothingFound ? renderNoResultFound() : renderSearchResult()}
            </div>
        </>
    )
}