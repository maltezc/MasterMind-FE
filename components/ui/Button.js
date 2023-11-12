import Link from 'next/link'
// import {BeakerIcon, MapPinIcon} from "@heroicons/react/20/solid";


export default function Button( {buttonText, className, onClick, type, disabled=false} ) {
    return (
        <div className={className}>
            <button
                disabled={disabled}
                type={type}
                onClick={onClick}
                className={`text-white bg-blue-500 px-4 py-2 rounded-md ${className}`}>
                {buttonText}
            </button>
        </div>
    )
}