import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button";



const cart = () => {
    
    return (
        <div>
            <div>
                {/* <h1>Processor:{selectProcessor ? <h1>{selectProcessor}</h1> : ""}</h1>
                <h1>MotherBord:{selectProcessor ? <h1>{selectProcessor}</h1> : ""}</h1>
                <h1>GrapicsCard:{selectProcessor ? <h1>{selectProcessor}</h1> : ""}</h1>
                <h1>Ram:{selectProcessor ? <h1>{selectProcessor}</h1> : ""}</h1> */}
                welcome to our web site
            </div>
            <Link href={"/sale"}>
                <Button variant="default" className="px-8 py-4">
                    Add Items
                </Button>
            </Link>
        </div>
    )
}

export default cart