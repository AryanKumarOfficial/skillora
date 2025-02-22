import React from "react";
import PageTitle from "@/components/sections/pageTitle";
import BooksDetails from "@/app/(group1)/(acedemics)/list-of-books/Books";

export default function ListOfBooksPage() {
    return (
        <main>
            <PageTitle
                pageName="List of Books"
                breadcrumbCurrent="List of Books"
                breadcrumbLink="/list-of-books"
            />
            <BooksDetails/>
        </main>
    );
}
