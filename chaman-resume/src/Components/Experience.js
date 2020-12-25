import React from 'react';
import Company from './Company';
import Header from './Header';


const Experience = ({ isFromLink }) => {
    const companies = [{
        companyName: "Mettl",
        duration: "Joined at May 2020",
        designation: "SDE-2",
        technologies: "Java, Spring, Spring-Boot, JPA, Hibernate, Angular, React"
    },
    {
        companyName: "Nutritap",
        duration: "April-2019 - May-2020",
        designation: "Application Developer",
        technologies: "Java, Spring, Spring-Boot, iOS-Swift, Android - In java and Kotlin"
    },
    {
        companyName: "CFE INDIA",
        duration: "Feb-2016 - April-2019",
        designation: "Software Developer",
        technologies: "iOS-Swift and Objective-C, Android - In java and KotlinJava, Spring, Spring-Boot"
    }]

    return (
        <div>
            {isFromLink == "NO" ? "" : <Header />}
            <h4 className="ml-3">My experice is following :-</h4>
            {
                companies.length > 0 ?
                    companies.map((item) => <Company companyDetails={item} />) : "No experience"
            }
        </div>
    )
}

export default Experience;