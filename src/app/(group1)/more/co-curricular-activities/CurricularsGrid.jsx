import React from 'react'
import Card from './Card'
import {curricular} from "@/lib/fackdata/curricular";

const CurricularGrid = () => {
    return (
        <div className="lg:pb-15 pb-10">
            <div className="container">
                <div className="lg:pl-11">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-y-7.5 lg:gap-x-[74px] gap-x-5 lg:pt-15 pt-10">
                        {curricular.map(({id, title, description}) => <Card key={id}
                                                                            title={title}
                                                                            description={description}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurricularGrid