import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Company = ({ companyDetails }) => {
    return (
        <div>
            <Card>
                {/* <CardImg top width="10%" src={Chaman} alt="Card image cap" /> */}
                <CardBody>
                    <CardTitle tag="h5">{companyDetails.companyName}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2">Designation : {companyDetails.designation}</CardSubtitle>
                    <CardText>Duration : {companyDetails.duration}</CardText>
                    <CardText>Technologies : {companyDetails.technologies}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default Company;