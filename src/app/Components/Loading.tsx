import React, {useContext} from 'react';
import {Spinner} from "@nextui-org/react";
import {AppContext} from "@/app/Providers/appProvider";

const Loading = () => {
    const context: any = useContext(AppContext)

    return (
        context?.loadingData.isLoading ?
        <div style={{position: "absolute", top: 0}} className="bg-opacity-50 h-screen w-screen loading-background">
            <div className="h-screen flex items-center justify-center flex-col">
                <div className="text-4xl" style={{color: 'white'}}>{context?.loadingData.loadingText || ''}</div>
                <Spinner color="white" size="lg"/>
            </div>
        </div> : <></>
    );
}

export default Loading