import { useDispatch } from "react-redux";

import { toggleMenu } from "../utils/store/slices/menuSlice";
import { YOUTUBE_AUTO_SUGGEST_SEARCH_API } from "../constant/apis/youtube";
import useFetch from "../customHooks/useFetch";

import logo from "../assets/logo.png";
import searchSVG from "../assets/search.svg";
import user from "../assets/user.svg";
import menu from "../assets/menu.svg";
import { useEffect, useState } from "react";

const Header = () => {
    const [search, setSearch] = useState("");
    const [searchFocus, setSearchFocus] = useState(false);
    const [searchParams, setSearchParams] = useState("");

    const [isAutoSuggestLoading, isAutoSuggestError, autoSuggestData] = useFetch(YOUTUBE_AUTO_SUGGEST_SEARCH_API, searchParams);
    const dispatch = useDispatch();
    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchParams(search);
        }, [200]);
        return () => clearTimeout(timer);
    }, [search])
    const onSearchChange = (event) => {
        setSearch(event.target.value);
    };
    const onSearch = (suggestion) => {
        window.location = `/results?search_query=${suggestion}`;
    };
    return (
        <div className="grid grid-flow-col h-13 shadow-lg p-3">
            <div className="flex">
                <img src={menu} alt="menu logo" className="h-5 mt-1 cursor-pointer" onClick={() => dispatch(toggleMenu())} />
                <a href="/">
                    <img className="h-5 mt-1 ml-6" src={logo} alt="Youtube logo" />
                </a>
            </div>
            <div className="flex col-span-10 justify-center">
                <input
                    // onBlur={() => setSearchFocus(false)}
                    onFocus={() => setSearchFocus(true)}
                    value={search}
                    onChange={onSearchChange}
                    className="border-solid border border-slate-400 rounded-l-3xl w-1/2 p-2 "
                    placeholder="search"
                />
                <div className="border-solid border border-slate-400 rounded-r-3xl p-1 cursor-pointer bg-gray-100">
                    <img src={searchSVG} alt="search icon" className="mx-4 h-6" />
                </div>
                <div className="absolute bg-white top-14 p-2 rounded-xl">
                    {autoSuggestData.length && searchFocus ? (
                        autoSuggestData[1].map((suggestion) => {
                            return (
                                <div onClick={() => onSearch(suggestion)} key={suggestion} className="m-2 flex hover:bg-gray-300 rounded-lg p-2">
                                    <img src={searchSVG} alt="search icon" className="h-4 m-1 mr-6" />
                                    {suggestion}
                                </div>
                            );
                        })
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <img className="h-10" src={user} alt="user" />
        </div>
    );
};

export default Header;
