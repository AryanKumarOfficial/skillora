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
            "subTitle": "Dreamland Elementary - Hosting over 5,000 students annually with 200+ faculty members."
        },
        {
            "id": 2,
            "src": "https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg",
            "title": "Modern Campus",
            "subTitle": "Dreamland Elementary - Spanning 50 acres with state-of-the-art labs and infrastructure."
        },
        {
            "id": 3,
            "src": "https://images.unsplash.com/photo-1680084521631-e4e6d77704d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Safe Environment",
            "subTitle": "Dreamland Elementary - 24/7 security, biometric access, and over 200 CCTV cameras ensuring safety."
        },
        {
            "id": 4,
            "src": "https://images.pexels.com/photos/207697/pexels-photo-207697.jpeg",
            "title": "Student Facilities",
            "subTitle": "Dreamland Elementary - Equipped with 10+ sports complexes, 5 cafeterias, and a 1000-seat auditorium."
        },
        {
            "id": 5,
            "src": "https://plus.unsplash.com/premium_photo-1697729447666-c39f50d595ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Green Spaces",
            "subTitle": "Dreamland Elementary - Featuring 1,000+ trees, botanical gardens, and 5 eco-friendly zones."
        }
    ],
    "library": [
        {
            "id": 1,
            "src": "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
            "title": "Knowledge Hub",
            "subTitle": "Dreamland Library - Home to 100,000+ books, 1,500 rare manuscripts, and digital archives."
        },
        {
            "id": 2,
            "src": "https://plus.unsplash.com/premium_photo-1682284548106-3e589faff54f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Quiet Study",
            "subTitle": "Dreamland Library - 500+ study seats, noise-free reading zones, and private study cubicles."
        },
        {
            "id": 3,
            "src": "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
            "title": "Research Area",
            "subTitle": "Dreamland Library - 50+ research journals added monthly and access to global research networks."
        },
        {
            "id": 4,
            "src": "https://images.pexels.com/photos/267783/pexels-photo-267783.jpeg",
            "title": "Digital Resources",
            "subTitle": "Dreamland Library - 10,000+ e-books, AI-assisted search tools, and multimedia research content."
        },
        {
            "id": 5,
            "src": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Vast Collection",
            "subTitle": "Dreamland Library - 5,000+ students use the library daily, with expert librarian support."
        }
    ],
    "transport": [
        {
            "id": 1,
            "src": "https://images.unsplash.com/photo-1520631380-e7732afe3929",
            "title": "Safe Transport",
            "subTitle": "Dreamland Transit - GPS-tracked buses ensuring safety for 2,000+ students daily."
        },
        {
            "id": 2,
            "src": "https://plus.unsplash.com/premium_photo-1661962450733-7f564e8199f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Bus Service",
            "subTitle": "Dreamland Transit - 50+ buses covering 100+ pickup points across the city."
        },
        {
            "id": 3,
            "src": "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
            "title": "Efficient Routes",
            "subTitle": "Dreamland Transit - Covers over 20 city districts with 100+ stops."
        },
        {
            "id": 4,
            "src": "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
            "title": "Eco-Friendly Buses",
            "subTitle": "Dreamland Transit - 60% of fleet powered by clean energy."
        },
        {
            "id": 5,
            "src": "https://images.unsplash.com/photo-1560807707-8cc77767d783",
            "title": "Student Discounts",
            "subTitle": "Dreamland Transit - Special fare discounts for enrolled students."
        }
    ],
    "hostel": [
        {
            "id": 1,
            "src": "https://images.unsplash.com/photo-1520966488472-f910ff3b178d",
            "title": "Comfortable Stay",
            "subTitle": "Dreamland Hostel - 1,000+ rooms equipped with modern amenities and 24/7 supervision."
        },
        {
            "id": 2,
            "src": "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
            "title": "Study Halls",
            "subTitle": "Dreamland Hostel - 24/7 accessible study spaces with high-speed WiFi."
        },
        {
            "id": 3,
            "src": "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "title": "Recreation Centers",
            "subTitle": "Dreamland Hostel - Gym, gaming zones, and sports arenas available."
        },
        {
            "id": 4,
            "src": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Healthy Meals",
            "subTitle": "Dreamland Hostel - Nutritionally balanced meals served three times a day."
        },
        {
            "id": 5,
            "src": "https://images.pexels.com/photos/2029738/pexels-photo-2029738.jpeg",
            "title": "Secure Premises",
            "subTitle": "Dreamland Hostel - Biometric access and night-time patrolling for safety."
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
