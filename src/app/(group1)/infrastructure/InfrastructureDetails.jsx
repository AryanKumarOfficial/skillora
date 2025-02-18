"use client"
import React, {useState} from 'react'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import CardOne from './CardOne.jsx'
import CardTwo from './CardTwo'
import CardThree from './CardThree.jsx'
import CardFour from './CardFour.jsx'
import SlideUp from '@/lib/animations/slideUp'

const categoryList = [
    {id: 1, label: "Campus", data_target: "campus"},
    {id: 2, label: "Library", data_target: "library"},
    {id: 3, label: "Transport", data_target: "transport"},
    {id: 4, label: "Hostel", data_target: "hostel"}
]

const data = {
    "campus": [
        {
            "id": 1,
            "src": "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg",
            "title": "Campus Life",
            "subTitle": "Dreamland Elementary"
        },
        {
            "id": 2,
            "src": "https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg",
            "title": "Modern Campus",
            "subTitle": "Dreamland Elementary"
        },
        {
            "id": 3,
            "src": "https://images.unsplash.com/photo-1680084521631-e4e6d77704d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Safe Environment",
            "subTitle": "Dreamland Elementary"
        },
        {
            "id": 4,
            "src": "https://images.pexels.com/photos/207697/pexels-photo-207697.jpeg",
            "title": "Student Facilities",
            "subTitle": "Dreamland Elementary"
        },
        {
            "id": 5,
            "src": "https://plus.unsplash.com/premium_photo-1697729447666-c39f50d595ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Green Spaces",
            "subTitle": "Dreamland Elementary"
        }
    ],
    "library": [
        {
            "id": 1,
            "src": "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
            "title": "Knowledge Hub",
            "subTitle": "Dreamland Library"
        },
        {
            "id": 2,
            "src": "https://plus.unsplash.com/premium_photo-1682284548106-3e589faff54f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Quiet Study",
            "subTitle": "Dreamland Library"
        },
        {
            "id": 3,
            "src": "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
            "title": "Research Area",
            "subTitle": "Dreamland Library"
        },
        {
            "id": 4,
            "src": "https://images.pexels.com/photos/267783/pexels-photo-267783.jpeg",
            "title": "Digital Resources",
            "subTitle": "Dreamland Library"
        },
        {
            "id": 5,
            "src": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Vast Collection",
            "subTitle": "Dreamland Library"
        }
    ],
    "transport": [
        {
            "id": 1,
            "src": "https://images.unsplash.com/photo-1520631380-e7732afe3929?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Safe Transport",
            "subTitle": "Dreamland Transit"
        },
        {
            "id": 2,
            "src": "https://plus.unsplash.com/premium_photo-1661962450733-7f564e8199f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Bus Service",
            "subTitle": "Dreamland Transit"
        },
        {
            "id": 3,
            "src": "https://plus.unsplash.com/premium_photo-1664392356422-c7f036669838?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Pickup Points",
            "subTitle": "Dreamland Transit"
        },
        {
            "id": 4,
            "src": "https://plus.unsplash.com/premium_photo-1661727616081-bb7d53766bd5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Friendly Drivers",
            "subTitle": "Dreamland Transit"
        },
        {
            "id": 5,
            "src": "https://images.pexels.com/photos/276781/pexels-photo-276781.jpeg",
            "title": "GPS Tracking",
            "subTitle": "Dreamland Transit"
        }
    ],
    "hostel": [
        {
            "id": 1,
            "src": "https://images.unsplash.com/photo-1520966488472-f910ff3b178d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Comfortable Stay",
            "subTitle": "Dreamland Hostel"
        },
        {
            "id": 2,
            "src": "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            "title": "Spacious Rooms",
            "subTitle": "Dreamland Hostel"
        },
        {
            "id": 3,
            "src": "https://plus.unsplash.com/premium_photo-1724026586430-c26dd10098fc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Dining Facility",
            "subTitle": "Dreamland Hostel"
        },
        {
            "id": 4,
            "src": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Recreational Areas",
            "subTitle": "Dreamland Hostel"
        },
        {
            "id": 5,
            "src": "https://images.pexels.com/photos/2029738/pexels-photo-2029738.jpeg",
            "title": "Secure Premises",
            "subTitle": "Dreamland Hostel"
        }
    ]
}


const SchoolInfraStructure = () => {
    const [activeTab, setActiveTab] = useState(categoryList[0].data_target) // Set default to first category

    return (
        <section className="lg:pt-15 lg:pb-15 pt-10 pb-10 portfolio">
            <div className="container">
                <div className="text-center flex flex-col items-center">
                    <SectionName>Infrastructure</SectionName>
                    <Title size="3.5xl" className="lg:max-w-[630px]">
                        Our Infrastructure
                    </Title>
                </div>

                <div className="pt-10">
                    {/* Category Tabs */}
                    <ul className="flex items-center justify-center flex-wrap md:gap-7.5 gap-5">
                        {categoryList.map(({data_target, id, label}) => (
                            <li
                                key={id}
                                onClick={() => setActiveTab(data_target)}
                                className={`px-5 py-2.5 text-xl font-700 border border-[#F2F2F2] rounded-[10px] font-jost cursor-pointer transition-all duration-500 
                                    ${activeTab === data_target ? "bg-primary text-cream-foreground" : "hover:bg-primary hover:text-cream-foreground"}`}
                            >
                                {label}
                            </li>
                        ))}
                    </ul>

                    {/* Content Display */}
                    <SlideUp>
                        <div className="mt-[64px] overflow-hidden relative">
                            {data[activeTab] ? (
                                <>
                                    <CardOne data={data.campus} data_target={activeTab}/>
                                    <CardTwo data={data.library} data_target={activeTab}/>
                                    <CardThree data={data.transport} data_target={activeTab}/>
                                    <CardFour data={data.hostel} data_target={activeTab}/>
                                </>
                            ) : (
                                <p className="text-center text-xl font-semibold mt-10">No data available for this
                                    category.</p>
                            )}
                        </div>
                    </SlideUp>
                </div>
            </div>
        </section>
    )
}

export default SchoolInfraStructure
