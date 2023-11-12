import Link from 'next/link'
import {BeakerIcon, MapPinIcon} from "@heroicons/react/20/solid";


export default function ButtonLink(props) {
    return (
        <div>
            <Link href={props.link} className="text-white bg-blue-500 px-4 py-2 rounded-md">
                {props.children}
            </Link>
        </div>
    )
}