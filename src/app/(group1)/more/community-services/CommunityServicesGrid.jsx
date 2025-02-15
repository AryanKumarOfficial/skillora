"use client";
import React, {useState} from 'react';
import communities from "@/data/community.json"
import CardTwo from "@/app/(group1)/more/community-services/CardTwo";

const CommunityServicesGrid = () => {
    const [filter, setFilter] = useState('All');

    const handleFilterChange = (category) => {
        setFilter(category);
    };

    const filteredCommunity = filter === 'All'
        ? communities
        : communities.filter((item) => item.category === filter);

    const categories = ['All', ...new Set(communities.map((item) => item.category))];

    return (
        <div className="lg:pb-15 pb-10">
            <div className="container">
                <div className="lg:pl-11">

                    {/* Filter Buttons */}
                    <div className="mb-8 flex gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleFilterChange(category)}
                                className={`py-2 px-4 rounded-md truncate ${filter === category ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 '}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* show the number of cards available */}
                    <h2 className="text-2xl font-bold text-primary-foreground mb-5">
                        {filteredCommunity.length} {filter === 'All' ? '' : filter} {" "} Community Services {filteredCommunity.length > 1 ? 'Activities' : 'Activity'}
                    </h2>

                    <div className="grid md:grid-cols-3 grid-cols-1 gap-y-7.5 lg:gap-x-[45px] gap-x-5 lg:pt-15 pt-10">
                        {filteredCommunity.map(({id, title, description, date, image, category}) => (
                            <CardTwo
                                key={id}
                                id={id}
                                src={image}
                                title={title}
                                blog_desc={description}
                                date={date}
                                category={category}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityServicesGrid;
