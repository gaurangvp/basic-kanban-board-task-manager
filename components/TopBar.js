import React from 'react';
import {SearchIcon, AtSymbolIcon, BellIcon} from '@heroicons/react/outline';
import Image from 'next/image';

function TopBar(props) {
    return (
        <div className="h-16 pl-40 fixed bg-purple-400 w-full flex items-center justify-between pr-5">
            <div className="flex px-5 items-center">
            
            </div>
            <div className="flex space-x-6">
                <SearchIcon className="w-6 h-6 text-white"/>
                <AtSymbolIcon className="w-6 h-6 text-white"/>
                <BellIcon className="w-6 h-6 text-white"/>
                <div className="flex items-center text-white">
                    <h3 className="font-bold mr-3">John Doe</h3>
                    <Image src="https://randomuser.me/api/portraits/men/75.jpg" width="36" height="36" objectFit="cover"
                        className=" rounded-full "/>
                </div>
            </div>
        </div>
    );
}

export default TopBar;